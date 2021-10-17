import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer'
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <div className={"scroll-snap-container"}>
        <Sidebar />
        <div className={"scroll-snap-item"}><Header id={"header"}/></div>
        <div className={"scroll-snap-item"}><About id={"about"}/></div>
        <Projects id={"projects"} />
        <Contact id={"contact"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
