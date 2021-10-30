import {Component} from "react/cjs/react.production.min";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginComponent from "./Login";
import WelcomeComponent from "./Welcome";
import ErrorComponent from "./ErrorHandling";
import ListTodosComponent from "./ListTodos";
import LogoutComponent from "./Logout";

class TodoApp extends Component {
  render() {
    return (
        <div className="TodoApp">
          <Router>
            <>
              <HeaderComponent/>
              <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
                <Route path="/welcome/:userName" component={WelcomeComponent}/>
                <Route path="/todos" component={ListTodosComponent}/>
                {/* Redirect to error component if path is undefined */}
                <Route component={ErrorComponent}/>
              </Switch>
              <FooterComponent/>
            </>
          </Router>
        </div>
    );
  }
}

export default TodoApp;