import { useState } from "react";
import NavBar from "../components/navBar";
import technology from "../data/technology.json";
import { useEffect } from "react";

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, images, description } = technology.technology[activeIndex];

  useEffect(function () {
    const timer = setInterval(function () {
      setActiveIndex((prevIndex) =>
        prevIndex === technology.technology.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[url('/technology/background-technology-mobile.jpg')] h-screen w-full bg-no-repeat bg-cover md:bg-[url('/technology/background-technology-tablet.jpg')] md:bg-cover md:bg-center lg:bg-[url('/technology/background-technology-desktop.jpg')]">
      <NavBar />
      <h3 className="font-mono text-[22px] text-center text-white md:text-left md:ml-70">03 SPACE LAUNCH 101</h3>
      <div className="text-blue-100 flex flex-col items-center justify-center text-center mt-6 gap-10 md:flex-row-reverse md:text-left md:mt-25 md:gap-40">
        <div>
          <img src={images.landscape} alt={name} className="md:hidden" />
          <img src={images.portrait} alt={name} className="hidden md:block md:w-[500px] md:h-[500px]" />
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="flex items-center justify-center gap-4 md:gap-8 md:flex-col">
            {technology.technology.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border text-lg font-bold transition cursor-pointer hover:bg-stone-500 md:flex-col
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
          <div className="flex flex-col gap-2 px-6 text-[15px] md:w-[430px] md:gap-5">
            <h3 className="font-mono text-2xl md:text-[20px]">THE TERMINOLOGY</h3>
            <h1 className="font-serif text-4xl uppercase md:text-[40px]">{name}</h1>
            <p className="md:text-sm">{description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Technology;
