import { NavLink } from "react-router-dom";

import { dgi } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={dgi} alt="logo" className="w-10 h-10 object-contains" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
