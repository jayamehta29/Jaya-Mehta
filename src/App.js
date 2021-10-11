import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar.jsx";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Project from "./Components/Project.jsx";
import Skills from "./Components/Skills.jsx";


import Particles from "react-particles-js";
import Experience from './Components/Experience';


function App() {
  return (
    <>
    <Particles
    className="particles-class"
    params={{
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type:"star",
          stroke:{
            width:0,
            color:"white"
            
          }
        }
      },
    }}/>
      <Navbar />
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Experience/>
      <Footer style={{color:"white"}}/>
    </>
  );
}

export default App;
