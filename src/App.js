import React from "react";
import "./App.css";

import Header from './components/Header/Header'
import Education from './components/Education/Education'
import PersonalDetails from './components/PersonalDetails/PersonalDetails'

import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
        <div className="tm-section-texture fullheighttest" id="header">
            <Header/>
        </div>
        <hr className="uk-divider-icon"></hr>
        <div id="about">
            <PersonalDetails/>
        </div>
        <div id="education">
            <Education/>
        </div>
        <div id="skills">
            <Skills/>
        </div>
        <div id="footer">
            <Footer/>
        </div>
    </>
  );
}

export default App;
