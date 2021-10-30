import {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return (
        <div>
          Welcome {this.props.match.params.userName}. You can manage your todos <Link to="/todos">here</Link>.
        </div>
    );
  }
}

export default WelcomeComponent;