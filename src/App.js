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



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const ModalOpenHandler = () => {
    setIsOpen(true);
  };

  const ModalCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div><Header id={"header"}/></div>
        <div><Projects id={"projects"} isOpen={isOpen} onClose={ModalCloseHandler} onClick={ModalOpenHandler}/></div>
        <Sidebar />
        <div><About id={"about"}/></div>
        <Contact id={"contact"} />
        <Footer />
    </div>
  );
}

export default App;
