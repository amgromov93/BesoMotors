import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}