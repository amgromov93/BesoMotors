import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}