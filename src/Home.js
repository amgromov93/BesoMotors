import React from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import OurTeam from "./Components/OurTeam/OurTeam";
import Contacts from "./Components/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <OurTeam />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}