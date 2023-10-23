import axios from "axios";

const MyApi = axios.create({
  baseURL: "https://news-project-7wh2.onrender.com/api",
});

export const getArticles = () => {
  return MyApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};
