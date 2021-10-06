import {Component} from "react/cjs/react.production.min";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginComponent from "./Login";
import WelcomeComponent from "./Welcome";

class TodoApp extends Component {
  render() {
    return (
        <div className="TodoApp">
          <Router>
            <>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome" component={WelcomeComponent} />
            </>
          </Router>
        </div>
    );
  }
}

export default TodoApp;