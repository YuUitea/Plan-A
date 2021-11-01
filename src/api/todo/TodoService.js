import axios from "axios";

const LOCAL_HOST = "http://localhost:8080";

class TodoService {
  getTodosByUserName(userName) {
    return axios.get(`${LOCAL_HOST}/user/${userName}/todos`);
  }

  deleteTodo(userName, id) {
    return axios.delete(`${LOCAL_HOST}/user/${userName}/todos/${id}`);
  }
}

export default new TodoService();