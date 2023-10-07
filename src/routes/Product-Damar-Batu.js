import React from "react";
import Navbar from "../components/Navbar";
import FooterNew from "../components/Footer-new";
import HeroImg2 from "../components/HeroImg2";
import CardDisplayDammarBatu from "../components/CardDisplayDammarBatu";
const DammarBatu = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1416425816930-a02a589195d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=8";
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Damar Batu Variant's" imageUrl={imageUrl} />
      <CardDisplayDammarBatu />
      <FooterNew />
    </div>
  );
};

export default DammarBatu;
