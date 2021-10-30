import {Component} from "react/cjs/react.production.min";

class ListTodosComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, description: "Learn React", isCompleted: false, targetDate: new Date()},
        {id: 2, description: "Vacation in Hawaii", isCompleted: false, targetDate: new Date()},
        {id: 3, description: "Skiing in Mt Baker", isCompleted: false, targetDate: new Date()}
      ]
    };
  }

  render() {
    return (
        <div>
          <h1>List Todos</h1>
          <table>
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
                      <tr>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.targetDate.toDateString()}</td>
                        <td>{todo.isCompleted.toString()}</td>
                      </tr>
              )
            }
            </tbody>
          </table>
        </div>
    );
  }
}


export default ListTodosComponent;