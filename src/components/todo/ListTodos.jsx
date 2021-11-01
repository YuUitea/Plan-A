import {Component} from "react/cjs/react.production.min";
import AuthenticationService from "../../api/todo/AuthenticationService";
import TodoService from "../../api/todo/TodoService";

class ListTodosComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    let userName = AuthenticationService.getAuthenticatedUser();
    TodoService.getTodosByUserName(userName)
      .then(
          response => {
            this.setState({todos: response.data});
          }
      )
  }

  render() {
    return (
        <div>
          <h1>List Todos</h1>
          <div className="container">
            <table className="table table-light table-striped">
              <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Completed</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.todos.map(
                    todo =>
                        <tr key={todo.id}>
                          <td>{todo.id}</td>
                          <td>{todo.description}</td>
                          <td>{todo.targetDate.toString()}</td>
                          <td>{todo.completed.toString()}</td>
                        </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}


export default ListTodosComponent;