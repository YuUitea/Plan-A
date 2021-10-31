import {Component} from "react/cjs/react.production.min";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      loginValidated: false,
      loginFailed: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange = (event) => {
    console.debug(`${event.target.name} is changed to ${event.target.value}`);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  login = (event) => {
    console.debug(`Login button is clicked`);
    if (this.state.userName === "yuyat" && this.state.password === "dummy") {
      this.setState({
        loginValidated: true,
        loginFailed: false
      });
      this.props.history.push(`/welcome/${this.state.userName}`);
      console.debug("Login successful")
    } else {
      this.setState({
        loginValidated: true,
        loginFailed: true
      });
      console.debug("Login failed")
    }
  }

  render() {
    return (
        <>
          <div className="container m-3">
            <h1 className="display-6 text-primaryflex-wrap">
              Welcome to Plan A - a simple Todo App. No more plan B.
            </h1>
            <ShowLoginMessage loginValidated={this.state.loginValidated}
                              loginFailed={this.state.loginFailed}/>
            <form className="g-3">
              <div className="form-floating mb-3">
                <input className="form-control" name="userName"
                       type="text" value={this.state.userName}
                       placeholder="Email or user name"
                       onChange={this.handleInputChange}/>
                <label htmlFor="userName">Email or user name</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" name="password"
                       type="password" value={this.state.password}
                       placeholder="Password"
                       onChange={this.handleInputChange}/>
                <label htmlFor="password">Password</label>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-outline-primary" type="button"
                        onClick={this.login}>
                  Sign in
                </button>
                <button className="btn btn-outline-secondary" type="button">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </>
    );
  }
}

function ShowLoginMessage(props) {
  // Do NOT show login message if the button is not clicked
  if (!props.loginValidated) {
    return null;
  }

  if (props.loginFailed) {
    return (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <FontAwesomeIcon className="flex-shrink-0 me-2" icon={["fas", "exclamation-triangle"]}/>
          <span>Invalid Credentials</span>
        </div>
    );
  } else {
    return (
        <div className="alert alert-info d-flex align-items-center" role="alert">
          <FontAwesomeIcon className="flex-shrink-0 me-2" icon={["fas", "info-circle"]}/>
          <span>Login Successful</span>
        </div>
    );
  }
}

ShowLoginMessage.propTypes = {
  loginValidated: PropTypes.bool,
  loginFailed: PropTypes.bool
};

export default LoginComponent;