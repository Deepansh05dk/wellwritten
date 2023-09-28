import axios from "axios";
const instance = axios.create({
  baseURL: "https://api-wellwritten.ggdev.tech/",
});
export default instance;
