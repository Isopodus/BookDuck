import { getFeelings, getTopics } from "./api";

class Duck {
  constructor() {
    this.keywords = []; // Keywords to find the book by
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
    const feelings = (await getFeelings(userMessage)).data;
    const topics = (await getTopics(userMessage)).data;

    this.mood = feelings.emotion_prediction;
    const moodBlock = this.emotionAnswers[this.mood];

    let answer = "";
    let book = null;

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
        this.keywords = topics.keywords;
        answer += moodBlock.conclusion;
        book = null; // TODO: Find the book
      }

      this.currentStage = 1;
    } else if (this.currentStage === 1) {
      // Stage 2 - Find the book
      this.keywords = topics.keywords;
      answer += moodBlock.conclusion;
      book = null; // TODO: Find the book
    }

    return { answer, book, topics };
  };
}

export default Duck;
