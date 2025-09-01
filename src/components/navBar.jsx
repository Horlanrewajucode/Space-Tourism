import { useState } from "react";
import Logo from "./logo";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="flex items-center justify-between p-8 z-50">
      <Logo />
      <nav>
        {!isOpen && (
          <div
            className="cursor-pointer md:hidden lg:hidden"
            onClick={handleToggle}
          >
            <img src="/icon-hamburger.svg" alt="hamburger-icon" />
          </div>
        )}
        {/* {isOpen && (
          <div
            className="cursor-pointer md:hidden lg:hidden z-50"
            onClick={handleToggle}
          >
            <img src="/icon-close.svg" alt="close-icon" />
          </div>
        )} */}
        {isOpen && (
          <div className="overflow-y-hidden fixed top-0 right-0 w-[70%] min-h-screen flex flex-col items-center gap-10 duration-300 ease-in py-8 text-2xl z-40 backdrop-blur-md">
            <div
              className="cursor-pointer self-end mr-8 mb-8 z-50"
              onClick={handleToggle}
            >
              <img src="/icon-close.svg" alt="close-icon" />
            </div>

            <NavLink
              to="/"
              onClick={handleToggle}
              className={({ isActive }) =>
                isActive ? "text-white border-white border-b-2 pb-2" : "text-white"
              }
            >
              00 HOME
            </NavLink>
            <NavLink
              to="/destination"
              onClick={handleToggle}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-white"
              }
            >
              01 DESTINATION
            </NavLink>
            <NavLink
              to="/crew"
              onClick={handleToggle}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-white"
              }
            >
              02 CREW
            </NavLink>
            <NavLink
              to="/technology"
              onClick={handleToggle}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-white"
              }
            >
              03 TECHNOLOGY
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
