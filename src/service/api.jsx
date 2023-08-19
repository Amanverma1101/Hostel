import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:80",
});

export default customFetch;
