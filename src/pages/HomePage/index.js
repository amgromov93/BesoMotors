import React from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Services from "../../Components/Services/Services";

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