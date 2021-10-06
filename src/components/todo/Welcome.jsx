import {Component} from "react/cjs/react.production.min";

class WelcomeComponent extends Component {
  render() {
    return (
        <div>
          Welcome {this.props.match.params.userName}
        </div>
    );
  }
}

export default WelcomeComponent;