import { API_KEY } from "@env";
import axios from "axios";

const headers = {
  "content-type": "application/json",
  "x-rapidapi-host": "textprobe.p.rapidapi.com",
  "x-rapidapi-key": API_KEY,
};

export default api = {
  getFeelings: text => {
    return axios
      .request({
        method: "POST",
        url: "https://textprobe.p.rapidapi.com/feelings",
        headers,
        data: { text, lang: "en" },
      })
      .catch(error => {
        console.error(error, error?.response?.data);
      });
  },

  getTopics: text => {
    return axios
      .request({
        method: "POST",
        url: "https://textprobe.p.rapidapi.com/topics",
        headers,
        data: { text, lang: "en" },
      })
      .catch(error => {
        console.error(error, error?.response?.data);
      });
  },

  getSubjects: category => {
    return axios
      .request({
        method: "GET",
        url: "https://books17.p.rapidapi.com/subjects/" + category,
        headers: { ...headers, "x-rapidapi-host": "books17.p.rapidapi.com" },
      })
      .catch(error => {
        console.error(error, error?.response?.data);
      });
  },

  getTextLanguage: stringsArray => {
    return axios
      .request({
        method: "POST",
        url: "https://language-detection4.p.rapidapi.com/language-detection",
        headers: {
          ...headers,
          "x-rapidapi-host": "language-detection4.p.rapidapi.com",
        },
        data: stringsArray,
      })
      .catch(error => {
        console.error(error, error?.response?.data);
      });
  },

  getBooks: subject => {
    return axios
      .request({
        method: "POST",
        url: "https://books17.p.rapidapi.com/works/subject",
        headers: { ...headers, "x-rapidapi-host": "books17.p.rapidapi.com" },
        data: { cursor: 1, subject },
      })
      .catch(error => {
        console.error(error, error?.response?.data);
      });
  },

  getBookData: bookId => {
    return axios
      .request({
        method: "GET",
        url: "https://books17.p.rapidapi.com/works/" + bookId,
        headers: { ...headers, "x-rapidapi-host": "books17.p.rapidapi.com" },
      })
      .catch(error => {
        console.error(error, error?.response?.data);
      });
  },
};
