import "./about.css";
import Header from "./header";
import Footer from "./footer";
function About() {
  return (
    <div>
      <Header />
      <div className="container about-container">
        <div className="col-md-12 text-center about-head">
          <h1>About us</h1>
        </div>
        <div className="row about-row">
          <div className="col-md-5">
            <div className="card about-card">
              <h2>About us</h2>
              <p>
                Hi My name is Kittisak Kaewka, and my nickname is New. I
                graduated in computer science from Naresuan University. I am
                interested in applying for a front-end developer position. I am
                excited to bring my knowledge, skills, and experience to
                contribute to this role, specifically in working on the
                front-end development of websites. I am passionate about
                creating beautiful, user-friendly, fast, and modern website
                designs. I am dedicated to enhancing the overall user experience
                and optimizing efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card about-card">
              <img
                className="img-fluid about-image about-image-1 "
                src="/img/about.jpg"
                alt="about"
              />
            </div>
          </div>
        </div>
        <div className="row about-row">
          <div className="col-md-7">
            <div className="card about-card">
              <img
                className="img-fluid about-image about-image-2"
                src="/img/skill.jpg"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="card about-card">
              <h2>Skill</h2>
              <p>RESTful API</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>HTLM</p>
              <p>CSS</p>
              <p>Php</p>
              <p>Dart</p>
            </div>
          </div>
        </div>
        <div className="row about-row">
          <div className="col-md-5">
            <div className="card about-card">
              <h2>Framework</h2>
              <p>React</p>
              <p>Flutter</p>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card about-card">
              <img
                className="img-fluid about-image about-image-3"
                src="/img/framework.jpg"
              />
            </div>
          </div>
        </div>
        <div className="row about-row">
          <div className="col-md-7">
            <div className="card about-card">
              <img
                className="img-fluid about-image about-image-4"
                src="/img/database.jpg"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="card about-card">
              <h2>Database</h2>
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className="row about-row">
          <div className="col-md-5">
            <div className="card about-card">
              <h2>Tools</h2>
              <p>Adobe Premiere Pro</p>
              <p>Adobe Photoshop</p>
              <p>Git</p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card about-card">
              <img
                className="img-fluid about-image about-image-5"
                src="/img/tools.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
