import { Link } from "react-router-dom";
import "./home.css";
import Header from "./header";
import Footer from "./footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="container home-container">
        <div className="row home-row">
          <div className="left col-lg-6 col-md-6 col-sm-12">
            <h1>Welcome to my website</h1>
            <p>This is a website portfolio developed by me</p>
            <br />
            <p>
              I will take you to visit the website developed by me. Here are the
              details about me. I studied and tried to work in the field of
              programmers for a while. I like and enjoy it in this field.
            </p>
            <br />
            <p>Are you ready to visit my website ?</p>
            <p>
              If you are ready to visit the website, then press the button
              below.
            </p>
            <button className="home-btn">
              <Link className="Link-btn" to="/about">
                Get Start
              </Link>
            </button>
          </div>
          <div className="right col-lg-6 col-md-6 col-sm-12">
            <img className="home-image" src="/img/com.png" alt="Computer" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
