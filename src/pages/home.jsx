import NavBar from "../components/navBar";

function Home() {
  return (
    <div className="bg-[url('/home/background-home-mobile.jpg')] h-screen w-full bg-no-repeat bg-cover md:bg-[url('/home/background-home-tablet.jpg')] md:bg-cover md:bg-center lg:bg-[url('/home/background-home-desktop.jpg')]">
      <NavBar />
    </div>
  );
}

export default Home;
