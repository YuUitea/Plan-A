import axios from "axios";

const LOCAL_HOST = "http://localhost:8080";

class TodoService {
  getTodosByUserName(userName) {
    return axios.get(`${LOCAL_HOST}/user/${userName}/todos`);
  }
}

export default new TodoService();