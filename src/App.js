import React,{useState} from "react";
import {Route, Routes } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Projects from "./Projects";
import './App.css';

function App() {
  const[burgerking,setBurgerKing]=useState("menu");
  function handleBurger(e){
    e.preventDefault();
    if(burgerking==="menu"){
    setBurgerKing("close")
    }
    else{
    setBurgerKing("menu")
    }

}
  return (
    <div className="App">
      <div>
          <div id="navbar">
            <h3>DORIS MORALES</h3>
            <i class="material-icons" id="burger" onClick={handleBurger}>{burgerking}</i>
          </div>
                <hr />
      </div>
      {burgerking==="close"?
            <ul id="nav" style={{position:"absolute"}}>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/about">Contact</a>
            </ul>:null }
      <Routes>
      <Route path="/" exact element={<Home burgerking={burgerking}/>}>
      </Route>
      <Route path="/about" exact element={<About />}>
      </Route>
      <Route path="/projects" exact element={<Projects />}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
