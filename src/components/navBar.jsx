import { useState } from "react";
import Logo from "./logo";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="flex items-center justify-between p-8 z-50 md:px-12 lg:px-14">
      <Logo />
      <div>
        {!isOpen && (
          <div
            className="cursor-pointer md:hidden lg:hidden"
            onClick={handleToggle}
          >
            <img src="/icon-hamburger.svg" alt="hamburger-icon" />
          </div>
        )}
        {isOpen && (
          <div className="overflow-y-hidden fixed top-0 right-0 w-[70%] min-h-screen flex flex-col items-center gap-12 text-left duration-300 ease-in py-8 text-2xl z-40 backdrop-blur-md md:hidden">
            <div
              className="cursor-pointer self-end mr-8 mb-8 z-50"
              onClick={handleToggle}
            >
              <img src="/icon-close.svg" alt="close-icon" />
            </div>
            <nav className=" flex flex-col items-start gap-12 text-left">
              <NavLink
                to="/"
                onClick={handleToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                    : "text-white hover:text-stone-300 hover:border-stone-300"
                }
              >
                <span className="font-bold">00</span> HOME
              </NavLink>
              <NavLink
                to="/destination"
                onClick={handleToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                    : "text-white hover:text-stone-300 hover:border-stone-300"
                }
              >
                <span className="font-bold">01</span> DESTINATION
              </NavLink>
              <NavLink
                to="/crew"
                onClick={handleToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                    : "text-white hover:text-stone-300 hover:border-stone-300"
                }
              >
                <span className="font-bold">02</span> CREW
              </NavLink>
              <NavLink
                to="/technology"
                onClick={handleToggle}
                className={({ isActive }) =>
                  isActive
                    ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                    : "text-white hover:text-stone-300 hover:border-stone-300"
                }
              >
                <span className="font-bold">03</span> TECHNOLOGY
              </NavLink>
            </nav>
          </div>
        )}
        <nav className="hidden md:flex lg:flex md:gap-14 lg:gap-16 md:font-semibold lg:font-semibold font-serif md:bg-[rgba(255, 255, 255, 0.05)] md:backdrop-blur-md py-5 px-25 lg:bg-[rgba(255, 255, 255, 0.05)]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                : "text-white hover:text-stone-300 hover:border-stone-300"
            }
          >
            00 HOME
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive
                ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                : "text-white hover:text-stone-300 hover:border-stone-300"
            }
          >
            01 DESTINATION
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive
                ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                : "text-white hover:text-stone-300 hover:border-stone-300"
            }
          >
            02 CREW
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive
                ? "text-stone-300 border-stone-300 border-b-2 pb-2 hover:text-white hover:border-white"
                : "text-white hover:text-stone-300 hover:border-stone-300"
            }
          >
            03 TECHNOLOGY
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
