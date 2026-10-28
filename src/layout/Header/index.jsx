import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import wheelOne from "../../assets/skate2.webp";
import wheelTwo from "../../assets/skate1.webp";

import paperBg from "../../assets/pap1.webp";

export default function HeaderNav() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isOmPage = location.pathname === "/om";

  // Handle navbar-collapse på scroll
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

  // For å scrolle til trailer hvis du kommer fra om page feks
  useEffect(() => {
    if (location.pathname !== "/" || location.hash !== "#trailer") {
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById("trailer")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  // Handle trailer button
  const handleTrailerClick = () => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/#trailer");
    } else {
      document.getElementById("trailer")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const links = (isBurgerMenu = false) => (
    <>
      <button
        type="button"
        onClick={handleTrailerClick}
        className={`px-2 lg:px-6 py-1 text-base sm:text-lg cursor-pointer ${
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
          <div className="flex flex-col items-center sm:items-start text-center gap-0  lg:flex-row lg:gap-20">
            {links(false)}
          </div>
        </nav>
      ) : (
        <div className="relative">
          {/* Burgerknappen */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            aria-expanded={open}
            className="
      relative z-20
      flex items-center justify-center
      w-14 h-14
      shrink-0
      mt-2
      cursor-pointer
      bg-egg/90
      rounded-full
      shadow-lg
      p-3
    "
          >
            <img
              src={open ? wheelTwo : wheelOne}
              alt=""
              className="block w-8 h-8 object-contain"
            />
          </button>

          {/* Notislappmeny */}
          {open && (
            <nav
              aria-label="Mobilmeny"
              className="
        absolute
        top-12 left-0
        w-64
        z-10
      "
            >
              <img
                src={paperBg}
                alt=""
                className="
          block
          w-full h-auto
          drop-shadow-xl
          pointer-events-none
        "
              />

              <div
                className="
          absolute inset-0
          flex flex-col
          items-center justify-center
          gap-3
          px-8 py-8
          text-center
        "
              >
                {links(true)}
              </div>
            </nav>
          )}
        </div>
      )}
    </header>
  );
}
