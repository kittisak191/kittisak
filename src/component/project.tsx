import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "./header";
import Footer from "./footer";

function Project() {
  return (
    <div>
      <Header />
      <div className="container project-container">
        <div className="col-md-12 text-center project-head">
          <h1>Project</h1>
        </div>
        <div className="Mylist">
          <div className="item col-lg-4 col-md-6 col-sm-12">
            <img className="image" src="/img/wash.png" />
            <div className="link">
              <a href="https://capable-chebakia-faa082.netlify.app/">
                <FontAwesomeIcon className="icon" icon={faChrome} />
              </a>
              <a href="https://github.com/kittisak191/washing/">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-12">
            <img className="image" src="/img/todolist.png" />
            <div className="link">
              <a href="https://todolist-8f7bd.web.app/">
                <FontAwesomeIcon className="icon" icon={faChrome} />
              </a>
              <a href="https://github.com/kittisak191/todolist">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-12">
            <img className="image" src="/img/pokemon.png" />
            <div className="link">
              <a href="https://pokemon-s-api.web.app/">
                <FontAwesomeIcon className="icon" icon={faChrome} />
              </a>
              <a href="https://github.com/kittisak191/pokemon-s-api">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="item col-lg-4 col-md-6 col-sm-12">
            <img className="image" src="/img/calculator.png" />
            <div className="link">
              <a href="https://calculator-2ffa3.web.app/">
                <FontAwesomeIcon className="icon" icon={faChrome} />
              </a>
              <a href="https://github.com/kittisak191/calculator">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
