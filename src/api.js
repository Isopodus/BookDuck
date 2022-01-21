import { TEXT_PROBE_API_KEY } from "@env";
import axios from "axios";

const headers = {
  "content-type": "application/json",
  "x-rapidapi-host": "textprobe.p.rapidapi.com",
  "x-rapidapi-key": TEXT_PROBE_API_KEY,
};

export const getFeelings = text => {
  return axios
    .request({
      method: "POST",
      url: "https://textprobe.p.rapidapi.com/feelings",
      headers,
      data: { text, lang: "en" },
    })
    .catch(error => {
      console.error(error);
    });
};

export const getTopics = text => {
  return axios
    .request({
      method: "POST",
      url: "https://textprobe.p.rapidapi.com/topics",
      headers,
      data: { text, lang: "en" },
    })
    .catch(error => {
      console.error(error);
    });
};
