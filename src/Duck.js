import api from "./api";

class Duck {
  constructor() {
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
    const feelings = (await api.getFeelings(userMessage)).data;
    const topics = (await api.getTopics(userMessage)).data;

    this.mood = feelings.emotion_prediction;
    const moodBlock = this.emotionAnswers[this.mood];

    let answer = "";
    let books = [];

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
      ];

      // Check if the topics contain typical mood words indicating that we should ask for more keywords
      if (topics.keywords.length <= 3 && topics.keywords.every(key => moodKeywords.indexOf(key) >= 0)) {
        // Ask user a question
        answer += moodBlock.keywordsRequest;
      } else {
        // Looks like we have enough keywords already, so try to find a book
        answer += moodBlock.conclusion;
        books = await this.findBooks(topics.categories);
      }

      this.currentStage = 1;
    } else if (this.currentStage === 1) {
      // Stage 2 - Find the book
      answer += moodBlock.conclusion;
      books = await this.findBooks(topics.categories);
    }

    return { answer, books, topics, mood: this.mood };
  };

  findBooks = async categories => {
    // Get the most matching category and prepare it
    let category = Object.keys(categories).reduce((cat1, cat2) => (obj[cat1] > obj[cat2] ? cat1 : cat2));
    category = category.split("/")[0];

    // Find the book subject by category
    const subjects = (await api.getSubjects(category)).data.data;

    // Get the best subject by how many books there are for it
    const bestSubject = subjects.reduce((prev, current) => {
      return prev.count > current.count ? prev : current;
    }).key;

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
}

export default Duck;
