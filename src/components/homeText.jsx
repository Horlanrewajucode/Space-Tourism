import { Link } from "react-router-dom";

function HomeText() {
  return (
    <main className="flex flex-col items-center justify-center gap-28 mt-6 text-center text-white md:flex-row lg:flex-row md:text-left lg:text-left md:px-74 md:justify-between md:mt-40">
      <div className="flex flex-col px-8 gap-4 md:w-[440px]">
        <h3 className=" text-[12px] md:text-[16px] text-blue-100">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="font-serif text-[80px] md:text-[90px]">SPACE</h1>
        <p className="text-[12px] text-blue-100">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          to="/destination"
          className="flex items-center justify-center font-bold font-serif cursor-pointer bg-white text-black rounded-full w-50 h-50 text-center"
        >
          EXPLORE
        </Link>
      </div>
    </main>
  );
}

export default HomeText;
