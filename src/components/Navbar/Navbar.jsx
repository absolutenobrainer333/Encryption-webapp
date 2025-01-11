import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Encryption</Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
        >
          <i className="fas fa-bars"></i> 
        </button>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="text-white bg-blue-500 hover:bg-blue-700 p-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
