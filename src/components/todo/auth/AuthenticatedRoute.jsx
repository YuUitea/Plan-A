import {Component} from "react/cjs/react.production.min";
import AuthenticationService from "../../../api/todo/AuthenticationService";
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

class AuthenticatedRoute extends Component {
  render() {
    return AuthenticationService.isUserAuthenticated() ?
        <Route {...this.props} /> : <Redirect to="/login" />;
  }
}

export default AuthenticatedRoute;