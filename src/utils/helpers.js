import axios from "axios";
import { options } from "./constants";

// API ye atacagimiz tum isteklerin basina bu URL i ekler
axios.defaults.baseURL = "https://youtube138.p.rapidapi.com/video/";

//'https://youtube138.p.rapidapi.com/video/details/',

//'https://youtube138.p.rapidapi.com/video/related-contents/',

export const getData = async (url) => {
  const res = await axios.get(url, options);
  return res.data;
};
