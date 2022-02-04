import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Home } from "../src/pages/Home";
import { Curiosidades } from './pages/Curiosidades'
import { Pessoal } from './pages/Pessoal'
import { Profissional } from './pages/Profissional'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={ <Home/> }/>

          <Route path="/Curiosidades" element={ <Curiosidades/> }/>

          <Route path="/Pessoal" element={ <Pessoal/> }/>

          <Route path="/Profissional" element={ <Profissional /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

