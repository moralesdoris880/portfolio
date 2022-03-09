import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Projects from "./Projects";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={<Home />}>
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
