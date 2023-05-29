import EarthCanvas from "./EarthCanvas";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <div id="hero-container" className="flex justify-center items-center">
        <div>
          <div className="mt-10 mb-5 bg-altGray bg-opacity-10 p-4 rounded-lg">
            <p className="text-center ">
              Hi, i'm a full stack software developer based in Italy!
            </p>
          </div>
          <div className="flex justify-between">
            <div className="inline-block">
              <h1 className="text-3xl font-medium">Alessio Romano</h1>
              <ul className="text-sm">
                <li>&#128188; Digital craftsman (developer / designer)</li>
                <li>&#127891; Software engineering student</li>
              </ul>
            </div>
            <img
              width="96px"
              height="96px"
              className="rounded-full inline-block border-2 border-altGray"
              src="./profilepic.png"
              alt="Alessio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
