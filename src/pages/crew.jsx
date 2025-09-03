import { useState } from "react";
import NavBar from "../components/navBar";
import crew from "../data/crew.json";
import { useEffect } from "react";

function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const crew = crew.crew
  const { name, images, role, bio } = crew.crew[currentIndex];

  useEffect(function () {
    const timer = setInterval(function () {
      setCurrentIndex((prevIndex) =>
        prevIndex === crew.crew.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[url('/crew/background-crew-mobile.jpg')] h-screen w-full bg-no-repeat bg-cover md:bg-[url('/crew/background-crew-tablet.jpg')] md:bg-cover md:bg-center lg:bg-[url('/crew/background-crew-desktop.jpg')]">
      <NavBar />
      <h3 className="text-white text-center md:text-left md:px-14 lg:px-24 font-mono text-[20px] ">
        <span className="text-stone-300">02</span> MEET YOUR CREW
      </h3>
      <div className="flex flex-col items-center justify-center md:flex-row md:h-[650px] ">
        <div className="flex flex-col items-center justify-center text-center py-6 px-10 text-blue-100 gap-10 md:w-[550px] md:gap-50 md:text-left md:items-start">
          <div className="flex flex-col gap-1">
            <h3 className="font-mono text-[25px] uppercase">{role}</h3>
            <h1 className="font-serif text-[35px] md:text-[55px]">{name}</h1>
            <p className="text-sm md:w-[375px] md:text-[12px]">{bio}</p>
          </div>
          <div className="flex gap-8">
            {crew.crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                  index === currentIndex ? "bg-white" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <img
            src={images.png}
            alt={name}
            className="w-[270px] h-[300px] md:w-[500px] md:h-[500px] "
          />
        </div>
      </div>
    </main>
  );
}

export default Crew;
