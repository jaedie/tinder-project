import axios from "axios";

const instance = axios.create({
  baseURL: " https://tinder-backend-aa.herokuapp.com",
});

export default instance;
