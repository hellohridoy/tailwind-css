import React from "react";
import Particle from "../../Particle";
import Type from "../Type";
import HomeMove from "./HomeMove";
function Home() {
  return (
    <section>
      <div class="home-section bg-gray-900" id="home">
        <Particle />
        <div className="container mx-auto py-12">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4x1 lg:text-5x1 font-bold text-white mb-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-5x1 lg:text-6x1 text-white font-extrabold leading-tight">
                I,M
                <span className="text-green-400">Hridoy Hossain</span>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </div>
            <div className="lg:w-1/2 mb-0 lg:mb-0">
              <img
                src={null}
                alt="home pic"
                className="w-full h-auto lg:max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <HomeMove />
    </section>
  );
}

export default Home;
