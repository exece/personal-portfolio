import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div id='header'>
        <Header />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
