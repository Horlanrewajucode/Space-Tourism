import HomeText from "../components/homeText";
import NavBar from "../components/navBar";

function Home() {
  return (
    <main className="bg-[url('/home/background-home-mobile.jpg')] h-screen w-full bg-no-repeat bg-cover md:bg-[url('/home/background-home-tablet.jpg')] md:bg-cover md:bg-center lg:bg-[url('/home/background-home-desktop.jpg')]">
      <NavBar />
      <HomeText />
    </main>
  );
}

export default Home;
