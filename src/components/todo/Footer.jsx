import {Component} from "react/cjs/react.production.min";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class FooterComponent extends Component {
  render() {
    return (
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <FontAwesomeIcon className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                               icon={['fab', 'autoprefixer']}
                               size="lg"/>
              <span className="text-muted">2021 @yuyat</span>
            </div>
            <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="nav-link text-muted" target="_blank" href="https://github.com/YuUitea/Plan-A">
                  <FontAwesomeIcon icon={['fab', 'github']} size="lg"/>
                </a>
              </li>
              <li className="ms-3">
                <a className="nav-link text-muted" target="_blank" href="http://www.linkedin.com/in/yuyatian">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/>
                </a>
              </li>
            </ul>
          </footer>
        </div>
    )
  }
}

export default FooterComponent;