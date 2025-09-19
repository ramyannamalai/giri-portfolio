import React, { useState } from "react";
import { Link } from "react-scroll"; // for smooth scroll
import { FaFacebook, FaLinkedin, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "HOME", to: "home" },
    { id: 2, name: "ABOUT", to: "about" },
    { id: 3, name: "PORTFOLIO", to: "portfolio" },
    { id: 4, name: "OUR CLIENTS", to: "clients" },
    { id: 5, name: "CONTACT", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 py-6 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Girieswaran</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-semibold tracking-widest">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4 text-xl">
         
          <a href="https://www.linkedin.com/in/girieswarann/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black py-6 space-y-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-gray-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex space-x-6 text-2xl mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Header;
