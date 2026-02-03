import axios from "axios";

export default class User {
  static searchUser() {
    return axios.get("/users").then((response) => response.data);
  }
}
