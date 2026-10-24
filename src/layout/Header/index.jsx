import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import wheelOne from "../../assets/menu-1.png";
import wheelTwo from "../../assets/menu-2.png";

export default function HeaderNav() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isOmPage = location.pathname === "/om";

  useEffect(() => {
    function handleScroll() {
      setCollapsed(window.scrollY > 80);

      if (window.scrollY <= 80) {
        setOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (isBurgerMenu = false) => (
    <>
      <button
        onClick={() => {
          document.getElementById("trailer")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setOpen(false);
        }}
        className={`px-2 py-1 text-base sm:text-lg ${
          isBurgerMenu ? "menu-text" : "nav-links-style"
        }`}
      >
        Se Trailer
      </button>

      <NavLink
        to={isOmPage ? "/" : "/om"}
        className={`px-2 py-1 text-base sm:text-lg ${
          isBurgerMenu ? "menu-text" : "nav-links-style"
        }`}
        onClick={() => setOpen(false)}
      >
        {isOmPage ? "Tilbake til forsiden" : "Om Jakob Hardeberg"}
      </NavLink>
    </>
  );

  return (
    <header
      className={`
    fixed top-6 left-0 z-50 w-full flex text-egg 
    transition-all duration-300

    ${
      collapsed
        ? "justify-start pl-6 sm:pl-7"
        : "justify-center sm:justify-start sm:pl-7"
    }
  `}
    >
      {!collapsed ? (
        <nav className="px-4 py-4 lg:px-8 lg:py-6 text-sm ">
          <div className="flex flex-col items-center sm:items-start text-center   gap-0 lg:flex-row lg:gap-20">
            {links(false)}
          </div>
        </nav>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="ml-2 mt-2 lg:ml-4 lg:mt-4 cursor-pointer "
          >
            {open ? (
              <img
                src={wheelTwo}
                alt="Close Menu"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            ) : (
              <img
                src={wheelOne}
                alt="Menu"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            )}
          </button>

          {open && (
            <nav className="absolute top-14 left-14 lg:top-20 lg:left-20 bg-egg   backdrop-blur-md   p-4 shadow-lg min-w-56 menu-text">
              <div className="flex flex-col gap-3 text-sm text-center items-center">
                {links(true)}
              </div>
            </nav>
          )}
        </div>
      )}
    </header>
  );
}
