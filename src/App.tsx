import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Project from "./component/project";
import Contact from "./component/contact";
import Gallery from "./component/gallery";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
