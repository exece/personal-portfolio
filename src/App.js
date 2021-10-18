import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer'
import Sidebar from "./components/Sidebar";
import ProjectModal from './components/Projects/ProjectModal';
import Modal from './components/UI/Modal';

//
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const ModalOpenHandler = () => {
    console.log("clicked");
    setIsOpen(true);
  };

  const ModalCloseHandler = () => {
    console.log("clicked");
    setIsOpen(false);
  };
  //<Modal isOpen={isOpen} onClose={ModalCloseHandler}>Hello World!</Modal>
  return (
    <div className="App">
      <div className={"scroll-snap-container"}>
        <Sidebar />
        <div className={"scroll-snap-item"}><Header id={"header"}/></div>
        <div className={"scroll-snap-item"}><About id={"about"}/></div>
        <Projects id={"projects"} isOpen={isOpen} onClose={ModalCloseHandler} onClick={ModalOpenHandler}/>
        <Contact id={"contact"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
