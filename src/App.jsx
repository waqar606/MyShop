import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySec from "./components/CategorySec";
import FeautureSec from "./components/FeautureSec";
import Banner from "./components/Banner";
import Blog from "./components/Blog";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategorySec />
      <FeautureSec />
      <Banner />
      <Blog />
    </main>
  );
};

export default App;
