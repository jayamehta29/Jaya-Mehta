import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from './Components/Header';

import Particles from "react-particles-js";


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
            color:"#f9ab00"
            
          }
        }
      },
    }}/>
      <Navbar />
      <Header/>
    </>
  );
}

export default App;
