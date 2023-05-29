import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="w-1/3 m-auto">
          <Hero />
        </div>
      </main>
    </div>
  );
}

export default App;
