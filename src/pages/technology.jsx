import { useState } from "react";
import NavBar from "../components/navBar";
import technology from "../data/technology.json";

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, images, description } = technology.technology[activeIndex];

  return (
    <main className="bg-[url('/technology/background-technology-mobile.jpg')] h-screen w-full bg-no-repeat bg-cover md:bg-[url('/technology/background-technology-tablet.jpg')] md:bg-cover md:bg-center lg:bg-[url('/technology/background-technology-desktop.jpg')]">
      <NavBar />
      <div>
        <div>
          <img src={images.landscape} alt={name} />
        </div>
        <div>
          <div className="flex">
            {technology.technology.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-full flex  items-center justify-center border text-lg font-bold transition cursor-pointer hover:bg-stone-500
                ${
                  activeIndex === index
                    ? "bg-white text-black"
                    : "bg-transparent border-white text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div>
            <h3>THE TERMINOLOGY</h3>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;
