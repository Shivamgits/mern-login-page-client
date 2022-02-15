import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Errorpage from "./Components/Errorpage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {
          <Routes>
            {<Route exact path="/" element={<Home />} />}
            {<Route exact path="/about" element={<About />} />}
            {<Route exact path="/contact" element={<Contact />} />}
            {<Route exact path="/login" element={<Login />} />}
            {<Route exact path="/signup" element={<Signup />} />}
            {<Route path="*" element={<Errorpage />} />}
          </Routes>
        }
      </div>
    </>
  );
}

export default App;
