import './App.css';
import Home from "./components/home";
import Resume from "./components/resume";
import Projects from "./components/projects";
import ContactMe from "./components/contactMe";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="resume" element={<Resume/>}/>
      <Route exact path="projects" element={<Projects/>}/>
      <Route exact path="contactMe" element={<ContactMe/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  
  );
}
export default App;
