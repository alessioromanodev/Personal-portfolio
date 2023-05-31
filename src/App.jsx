import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Stack from "./Components/Stack";
import EarthCanvas from "./Components/Canvas/EarthCanvas";
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
      <main className="md:p-0">
        <div className="mb-20 md:h-screen md:flex m-auto md:justify-center md:items-center md:gap-5">
          <div>
            <EarthCanvas />
          </div>
          <div>
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
