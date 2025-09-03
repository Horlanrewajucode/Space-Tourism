import { useState } from "react";
import NavBar from "../components/navBar";
import destination from "../data/destination.json";

function Destination() {
  const [active, setActive] = useState("moon");
  const data = destination[active];

  return (
    <main className="bg-[url('/destination/background-destination-mobile.jpg')] h-screen w-full bg-no-repeat bg-cover md:bg-[url('/destination/background-destination-tablet.jpg')] md:bg-cover md:bg-center lg:bg-[url('/   destination/background-destination-desktop.jpg')]">
      <NavBar />
      <h3 className="text-white text-center md:text-left md:px-14 lg:px-24 font-mono text-[20px] ">
        <span className="text-stone-300">01</span> PICK YOUR DESTINATION
      </h3>
      <div className="flex flex-col items-center justify-center mt-6 gap-8 md:flex-row md:gap-34 md:mt-20">
        <div>
          <img
            src={data.image}
            alt={data.name}
            className="w-[150px] h-[150px] md:w-[380px] md:h-[380px]"
          />
        </div>
        <div className="flex flex-col items-center md:w[540px] md:h-[540px] md:gap-4 md:justify-center">
          <nav className="flex gap-8 items-center text-center">
            {Object.keys(destination).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`uppercase tracking-wi pb-1 font-bold ${
                  active === key
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {key}
              </button>
            ))}
          </nav>
          <h1 className="text-[60px] font-serif text-blue-100">{data.name}</h1>
          <p className="text-[14px] px-8 text-center text-blue-100 md:w-[390px] md:text-left md:text-[12px]">
            {data.description}
          </p>
          <div className="w-[90%] h-[1px] bg-blue-50 mt-3"></div>
          <div className="flex flex-col mt-6 gap-6 text-blue-100 text-center md:flex-row md:gap-14 md:text-left">
            <div>
              <p className="font-mono text-[14px]">AVG. DISTANCE</p>
              <p className="font-serif text-[30px]">{data.distance}</p>
            </div>
            <div>
              <p className="font-mono text-[14px]">EST TRAVEL TIME</p>
              <p className="font-serif text-[30px]"> {data.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
