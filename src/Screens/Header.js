import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "My Works", to: "portfolio" },
    { id: 3, name: "Our Clients", to: "clients" },
    { id: 4, name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F1416] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-exo text-purple-600">Girieswaran</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10 text-[16px] text-white font-semibold tracking-widest">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-purple-600"
                  className="cursor-pointer font-exo hover:text-purple-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-xl text-gray-300">
            <a
              href="https://www.linkedin.com/in/girieswarann/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/giries_ctr?igsh=MWpnM213dDVuc2w5Ng=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919876543210"
             
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-6 text-left font-semibold">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-purple-600"
                  className="block cursor-pointer hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons (Mobile) */}
          <div className="flex justify-left space-x-6 text-2xl text-purple-600">
            <a
              href="https://www.linkedin.com/in/girieswarann/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/giries_ctr?igsh=MWpnM213dDVuc2w5Ng=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/+919123506136"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
