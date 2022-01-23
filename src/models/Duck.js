import api from "../requests/api";

class Duck {
  constructor(setLoading) {
    this.setLoading = setLoading; // A function to be called each tme we need to show the loading animation

    this.mood = null; // Users mood defined by sentiment analisys

    this.currentStage = 0; // Current dialog stage starting form 0 as the greeting

    this.emotionAnswers = {
      Anger: {
        responses: ["Thats unlucky :(", "Ugh, thats frustrating :(", "Ugh.", "Wow.", ":(", "Thats bad :("],
        keywordsRequest: "So can you better explain why did that happen?",
        conclusion: "Here is what I found for you, hope this will help you solve the problem!",
      },
      Fear: {
        responses: ["Ugh, I hope you will get better soon.", "Thats unlucky :(", "Don't worry!"],
        keywordsRequest: "Can you better explain what did make you feel afraid?",
        conclusion: "Here, take a look, I found something for you, hope this might help!",
      },
      Joy: {
        responses: ["Yay! Good to see you're doing well!", "Nice!", "Cool!", "Awesome!", "Great!"],
        keywordsRequest: "Tell me, what are your next plans?",
        conclusion: "Here, thats a book for you! I hope this will help you achieve your goals!",
      },
      Neutral: {
        responses: ["Okay.", "Well.", "Hm."],
        keywordsRequest: "And what are your next plans?",
        conclusion: "I found this book, it might help you get better!",
      },
      Sadness: {
        responses: ["Uh :(", "Oh :(", "That's bad :("],
        keywordsRequest: "So what makes you feel so sad?",
        conclusion: "Don't worry! Here, I think this book might help you, just keep it up!",
      },
    };
  }

  // Get random response text
  getRandom = responses => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Tell the duck what user said and get an answer
  proceedDialog = async userMessage => {
    this.setLoading(true);

    const feelings = (await api.getFeelings(userMessage)).data;
    const topics = (await api.getTopics(userMessage)).data;

    this.mood = feelings.emotion_prediction;
    const moodBlock = this.emotionAnswers[this.mood];

    let answer = "";
    let books = [];

    console.log("Keyword:", topics.keywords);
    if (!topics.keywords.length || topics.keywords[0].length < 3) {
      answer = "Sorry, I didn't get it, can you repeat please?";
      this.setLoading(false);
      return { answer, books, topics, mood: this.mood };
    }

    if (this.currentStage === 0) {
      // Stage 0 - Greetings answer
      answer += this.getRandom(moodBlock.responses) + " ";

      const moodKeywords = [
        "good",
        "well",
        "better",
        "sad",
        "bit sad",
        "worse",
        "nice",
        "fine",
        "awesome",
        "bad",
        "angry",
        "stupid",
        "cool",
        "all good",
        "scared",
        "right",
        "fine thank",
      ];

      // Check if the topics contain typical mood words indicating that we should ask for more keywords
      console.log(
        "Typicals:",
        topics.keywords.every(key => moodKeywords.indexOf(key.toLowerCase()) >= 0),
      );
      if (topics.keywords.length <= 3 && topics.keywords.every(key => moodKeywords.indexOf(key.toLowerCase()) >= 0)) {
        // Ask user a question
        answer += moodBlock.keywordsRequest;
      } else {
        // Looks like we have enough keywords already, so try to find a book
        res = await this.doBookLookup(answer, topics, moodBlock);
        books = res.books;
        answer = res.answer;
      }

      this.currentStage = 1;
    } else if (this.currentStage === 1) {
      // Stage 2 - Find the book
      res = await this.doBookLookup(answer, topics, moodBlock);
      books = res.books;
      answer = res.answer;
    }

    this.setLoading(false);
    return { answer, books, topics, mood: this.mood };
  };

  doBookLookup = async (answer, topics, moodBlock) => {
    const books = await this.findBooks(topics.categories, topics.keywords);
    if (books.length < 1) {
      answer = "Sorry, I was not able to find a book for you. Can you please better explain what did you mean?";
    } else {
      answer += moodBlock.conclusion;
    }
    return { answer, books };
  };

  findBooks = async (categories, keywords) => {
    // Get the most matching category and prepare it
    let category = Object.keys(categories).reduce((cat1, cat2) => (categories[cat1] > categories[cat2] ? cat1 : cat2));
    category = category.split("/")[0];

    // Dump if we have not enough letters
    if (category.length < 3 || keywords[0].lenght < 3) {
      return [];
    }

    // Find the book subjects by category and keywords
    const subjectsCategory = (await api.getSubjects(category.slice(0, 10))).data.data;
    const subjectsKeyword = (await api.getSubjects(keywords[0].slice(0, 10))).data.data;

    console.log("Category:", category);
    console.log("Selected category subejcts:", subjectsCategory.slice(0, 10));
    console.log("Selected keywords subejcts:", subjectsKeyword.slice(0, 10));

    // Wait a whole second to cope with API speed limit
    await new Promise(resolve => setTimeout(resolve, 1100));
    let subjects = subjectsKeyword.length ? subjectsKeyword : subjectsCategory;

    // If the category an be split in two: try to find a book by it's 2 parts
    if (keywords[0].includes(" ")) {
      const kwd1 = keywords[0].split(" ")[0].slice(0, 10);
      const kwd2 = keywords[0].split(" ")[1].slice(0, 10);
      console.log(kwd1, kwd2);

      const subjectsKeyword1 = kwd1.length > 2 ? (await api.getSubjects(kwd1)).data.data : [];
      const subjectsKeyword2 = kwd2.length > 2 ? (await api.getSubjects(kwd2)).data.data : [];
      await new Promise(resolve => setTimeout(resolve, 1100));

      console.log("K1:", subjectsKeyword1.slice(0, 10));
      console.log("K2:", subjectsKeyword2.slice(0, 10));

      if (subjectsKeyword1.length) {
        subjects = subjectsKeyword1;
      } else if (subjectsKeyword2.length) {
        subjects = subjectsKeyword2;
      }
    }

    // Get the best subject by how many books there are for it
    const bestSubject = subjects.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    }).key;

    console.log("Best subejct:", bestSubject);

    // Find books by that subject
    const books = (await api.getBooks(bestSubject)).data.data;

    // Get first 10 books and sort out the ones in English
    const result = [];
    // Create an array of titles to send at the language detection API
    const titles = [];
    books.slice(0, 10).forEach((book, idx) => {
      titles.push({ id: idx, text: book.title });
    });

    const languages = (await api.getTextLanguage(titles)).data;

    languages.forEach((lang, idx) => {
      if (lang.detected_language === "en") {
        result.push(books[idx]);
      }
    });

    return result;
  };

  resetDialog = stage => {
    this.currentStage = stage;
    this.mood = null;
  };
}

export default Duck;
