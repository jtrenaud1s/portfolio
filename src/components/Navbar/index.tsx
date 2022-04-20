import React, { useState } from "react";
import { List } from "react-bootstrap-icons";
import SocialIcons from "./SocialIcons";
import { NavLink } from "react-router-dom";

interface IMobileMenuProps {
  children: React.ReactNode;
  menuOpen: boolean;
}

const pages = ["About Me" /* , "Portfolio", "Resume", "Contact Me"*/];
const navLinks = pages.map((page) => (
  <NavLink
    key={page}
    className={({ isActive }) =>
      isActive
        ? "no-underline font-semibold hover:bg-azure-400 text-white"
        : "no-underline font-semibold hover:bg-azure-400 text-azure-300"
    }
    to={`#${page}`}>
    {page}
  </NavLink>
));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative z-20 w-full h-12 p-4 bg-azure-500 text-white flex items-center justify-between">
        <SocialIcons />
        <nav className="hidden md:flex flex-row items-center justify-end w-96">
          {navLinks}
        </nav>
        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50">
          <List className="text-4xl" />
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen}>{navLinks}</MobileMenu>
    </>
  );
};

const MobileMenu: React.FC<IMobileMenuProps> = ({ children, menuOpen }) => (
  <nav
    className={`absolute z-10 p-4 w-full flex flex-col space-y-3 bg-azure-500 text-white md:hidden transition-all ${
      menuOpen ? "translate-y-0" : "-translate-y-52"
    } ease-in-out duration-300`}>
    {children}
  </nav>
);

export default Navbar;
