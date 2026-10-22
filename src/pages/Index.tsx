import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index: React.FC = () => (
  <div className="min-h-screen bg-dark">
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Events />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default Index;