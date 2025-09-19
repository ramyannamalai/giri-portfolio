import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import MyWork from "./MyWork";
import Contact from "./Contact";
import BeforeAfter from "./BeforeAfter";
import OurClients from "./OurClients";

function App() {
  return (
    <div>
      <Header />
      <section id="home"><Banner/></section>
      <section id="about"><About/></section>
      <section id="portfolio"><MyWork/></section>
      <section id="clients"><OurClients/></section>
      <section id="contact"><Contact/></section>

    
    </div>
  );
}

export default App;
