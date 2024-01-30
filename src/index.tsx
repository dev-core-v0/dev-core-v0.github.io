import React from "react";
import ReactDOM from "react-dom/client";
import "./Output.css";
import "./App.css";

import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);
