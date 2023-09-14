import React, { useEffect } from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Product from "./routes/Product"
import Market from "./routes/Market"
import Contact from "./routes/Contact"
import DammarBatu from "./routes/Product-Damar-Batu"
import DammarGum from "./routes/Product-Damar-Gum"
import CopalGum from "./routes/Product-Copal-Gum"
import { Route,Routes } from "react-router-dom"



function App() {

  useEffect(() => {
    document.title = 'PT. Kreasi Emas Gemilang - Gum Based Raw Material Exporter';
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/market" element={<Market/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/dammar-batu" element={<DammarBatu/>}/>
      <Route path="/product/dammar-gum" element={<DammarGum/>}/>
      <Route path="/product/copal-gum" element={<CopalGum/>}/>
    </Routes>
    
    </>
  );
}

export default App;
