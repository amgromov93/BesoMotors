import React from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Services from "./Services/Services";
import OurTeam from "./OurTeam/OurTeam";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <OurTeam />
      </main>
      <Footer />
    </>
  );
}