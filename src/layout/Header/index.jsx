import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex  justify-center items-center text-center">
      <nav className="flex items-center justify-center  text-center px-8 py-6 text-amber-300">
        {/* <NavLink to="/" className="text-xl font-bold">
          B
        </NavLink> */}

        <div className="flex gap-20 justify-between items-center text-center">
          <NavLink to="/">Hjem</NavLink>
          <NavLink to="/">Se trailer</NavLink>
          <NavLink to="/om">Om Jakob Hardeberg</NavLink>
          <NavLink to="/prosjekter">Andre prosjekter</NavLink>
        </div>
      </nav>
    </header>
  );
}
