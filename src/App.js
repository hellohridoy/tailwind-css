import { Navigate, Route, Router, Routes } from "react-router";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import PreLoader from "./PreLoader";
import ScrollToTop from "./ScrollToTop";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";

function App() {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <PreLoader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}></div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
