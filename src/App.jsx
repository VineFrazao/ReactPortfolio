import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Educacao from "./Pages/Educacao/Educacao";
import Experiencia from "./Pages/Experiencia/Experiencia";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Educacao" element={<Educacao />} />
          <Route path="/Experiencia" element={<Experiencia /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
