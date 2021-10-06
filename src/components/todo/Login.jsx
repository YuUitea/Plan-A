import {Component} from "react/cjs/react.production.min";
import PropTypes from "prop-types";

class LoginComponent extends Component {

  constructor(props) {
    super();

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
          <ShowLoginMessage loginValidated={this.state.loginValidated} loginFailed={this.state.loginFailed} />
          User Name: <input name="userName" type="text" value={this.state.userName} onChange={this.handleInputChange} />
          Password:  <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          <button onClick={this.login}>Login</button>
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
        <div className="login-failure">
          Invalid Credentials
        </div>
    );
  } else {
    return (
        <div className="login-success">
          Login Successful
        </div>
    );
  }
}

ShowLoginMessage.propTypes = {
  loginValidated: PropTypes.bool,
  loginFailed: PropTypes.bool
};

export default LoginComponent;