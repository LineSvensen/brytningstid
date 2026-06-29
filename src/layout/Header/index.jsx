import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header className="fixed top-70 lg:top-0 left-0 z-50 w-full flex  sm:pl-8  lg:pt-0 lg:pl-0 lg:justify-center items-center text-center">
      <nav className="flex items-center justify-center  text-center px-4 py-4 lg:px-8 lg:py-6 text-white text-sm">
        {/* <NavLink to="/" className="text-xl font-bold">
          B
        </NavLink> */}

        <div className="flex flex-col  lg:flex-row text-left gap-1 lg:gap-20 lg:justify-between lg:items-center lg:text-center">
          {/* <NavLink to="/" className="  px-2 py-1">
            Hjem
          </NavLink> */}
          <NavLink to="/" className="  px-2 py-1">
            Se trailer
          </NavLink>
          <NavLink to="/om" className="  px-2 py-1">
            Om Jakob Hardeberg
          </NavLink>
          <NavLink to="/prosjekter" className=" px-2 py-1">
            Andre prosjekter
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
