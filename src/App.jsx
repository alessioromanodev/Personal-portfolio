import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import EarthCanvas from "./Components/EarthCanvas";
import Stack from "./Components/Stack";
import Bio from "./Components/Bio";
import Timeline from "./Components/Timeline";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div
          id="landing-container"
          className="flex m-auto justify-center items-center gap-5"
        >
          <div id="earth-container">
            <EarthCanvas />
          </div>
          <div id="hero-container">
            <Hero />
          </div>
        </div>
        <div>
          <Bio />
        </div>
        <div>
          <Stack />
        </div>
        <div>
          <Timeline />
        </div>
        <div>
          <ContactMe />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
