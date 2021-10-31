import {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class WelcomeComponent extends Component {
  render() {
    return (
        <>
          <h1 className="display-6 text-primary flex-wrap">
            <FontAwesomeIcon className="mb-3 me-2 mb-md-0"
                             icon={['fab', 'autoprefixer']}
                             size="md"/>
            Welcome to Plan A, {this.props.match.params.userName}!
          </h1>
          <div className="container">
            No more plan B for now on. You can manage your todos <Link to="/todos">here</Link>.
          </div>
        </>
    );
  }
}

export default WelcomeComponent;