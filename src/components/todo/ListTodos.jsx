import {Component} from "react/cjs/react.production.min";
import AuthenticationService from "../../api/todo/AuthenticationService";
import TodoService from "../../api/todo/TodoService";

class ListTodosComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null
    };
    this.refreshTodos = this.refreshTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let userName = AuthenticationService.getAuthenticatedUser();
    TodoService.getTodosByUserName(userName)
    .then(
        response => {
          this.setState({todos: response.data});
        }
    )
  }

  deleteTodo(id) {
    let userName = AuthenticationService.getAuthenticatedUser();
    TodoService.deleteTodo(userName, id)
    .then(
        response => {
          this.setState({message: `Successfully deleted todo ${id}`});
          this.refreshTodos();
        }
    )
  }

  render() {
    return (
        <div>
          <h1>List Todos</h1>
          <div className="container">
            {
              this.state.message &&
              <div className="alert alert-warning">{this.state.message}</div>
            }
            <table className="table table-light table-striped">
              <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Completed</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.todos.map(
                    todo =>
                        <tr key={todo.id}>
                          <td>{todo.description}</td>
                          <td>{todo.targetDate.toString()}</td>
                          <td>{todo.completed.toString()}</td>
                          <td>
                            <button className="btn btn-outline-dark"
                                    onClick={() => this.deleteTodo(todo.id)}>
                              Delete
                            </button>
                          </td>
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