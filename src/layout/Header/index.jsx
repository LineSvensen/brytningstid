import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

export default function HeaderNav() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

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

  const links = (
    <>
      <NavLink to="/" className="px-2 py-1" onClick={() => setOpen(false)}>
        Se trailer
      </NavLink>

      <NavLink to="/om" className="px-2 py-1" onClick={() => setOpen(false)}>
        Om Jakob Hardeberg
      </NavLink>

      <NavLink
        to="/prosjekter"
        className="px-2 py-1"
        onClick={() => setOpen(false)}
      >
        Andre prosjekter
      </NavLink>
    </>
  );

  return (
    <header className="fixed top-6 left-0 z-50 w-full flex  pl-4 text-white">
      {!collapsed ? (
        <nav className="px-4 py-4 lg:px-8 lg:py-6 text-sm">
          <div className="flex flex-col lg:flex-row text-left gap-1 lg:gap-20 lg:items-center lg:text-center">
            {links}
          </div>
        </nav>
      ) : (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black/60 backdrop-blur-md   cursor-pointer  rounded-full transition p-4 text-sm shadow-lg"
          >
            {open ? (
              <GrClose className="text-3xl" />
            ) : (
              <RxHamburgerMenu className="text-3xl" />
            )}
          </button>

          {open && (
            <nav className="absolute top-14 right-0 bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg min-w-56">
              <div className="flex flex-col gap-3 text-sm text-left">
                {links}
              </div>
            </nav>
          )}
        </div>
      )}
    </header>
  );
}
