import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./Components/Navbar.jsx";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Project from "./Components/Project.jsx";
import Skills from "./Components/Skills.jsx";
import Experience from './Components/Experience';



function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Project/>
      <Skills/>
      <Experience/>
      <Footer style={{color:"white"}}/>
    </>
  );
}

export default App;
