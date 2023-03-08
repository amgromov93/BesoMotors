import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/About/About";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}