import {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthenticationService from "../../api/todo/AuthenticationService";
import {withRouter} from 'react-router';

class HeaderComponent extends Component {
  render() {
    const isUserAuthenticated = AuthenticationService.isUserAuthenticated();
    return (
        <header>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div>
              <a className="navbar-brand" href="/">
                <FontAwesomeIcon className="mb-3 me-2 mb-md-0" icon={['fa', 'calendar-check']}/>
                Plan A
              </a>
            </div>
            {
              isUserAuthenticated &&
              <ul className="navbar-nav navbar-collapse">
                <li className="nav-item">
                  {/*TODO: update static username to dynamic*/}
                  <Link className="nav-link" to="/welcome/yuyat">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todos">Todos</Link>
                </li>
              </ul>
            }
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {
                !isUserAuthenticated &&
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              }
              {
                isUserAuthenticated &&
                <li className="nav-item">
                  <Link className="nav-link" to="/logout"
                        onClick={AuthenticationService.logout}>Logout</Link>
                </li>
              }
            </ul>
          </nav>
        </header>
    )
  }
}

export default withRouter(HeaderComponent);