import React from "react";
import Footer from "../../Components/Footer/Footer";

import Header from "../../Components/Header/Header";
import Address from "./Adress/Address";
import Map from "./Map/Map";

export default function Contacts() {
  return (
    <>
      <Header />
      <main>
        <Map/>
        <Address/>
      </main>
      <Footer />
    </>
  )
}