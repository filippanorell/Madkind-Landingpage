import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Values from "./components/Values/Values";
import Highlights from "./components/Highlights/Highlights";
import Artwork from "./components/Artwork/Artwork";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Values />
      <Highlights />
      <Artwork />
      <Footer />
    </div>
  );
}

export default App;
