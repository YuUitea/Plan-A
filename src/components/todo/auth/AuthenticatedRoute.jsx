import {Component} from "react/cjs/react.production.min";
import Authentication from "./Authentication";
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

class AuthenticatedRoute extends Component {
  render() {
    return Authentication.isUserAuthenticated() ?
        <Route {...this.props} /> : <Redirect to="/login" />;
  }
}

export default AuthenticatedRoute;