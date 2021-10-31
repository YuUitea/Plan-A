import {Component} from "react/cjs/react.production.min";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginComponent from "./Login";
import WelcomeComponent from "./Welcome";
import ErrorComponent from "./ErrorHandling";
import ListTodosComponent from "./ListTodos";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import LogoutComponent from "./Logout";
import AuthenticatedRoute from './auth/AuthenticatedRoute';

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
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                <AuthenticatedRoute path="/welcome/:userName" component={WelcomeComponent}/>
                <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
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