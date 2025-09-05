import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-20 py-6 flex items-center justify-between text-white">
      {/* Left Links */}
      <div className="hidden lg:flex items-center space-x-10 font-sans text-sm uppercase tracking-wide">
        <a
          href="/"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
        >
          About
        </a>
        <a
          href="/contact"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Contact
        </a>
      </div>

      {/* Logo */}
      <div className="text-3xl font-bold tracking-widest">
        <img
          src="https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/logo-light.png"
          className="w-13"
          alt="Logo"
        />
      </div>

      {/* Right Links */}
      <div className="hidden lg:flex items-center space-x-10 font-sans text-sm uppercase tracking-wide">
        <a
          href="/blogs"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Blogs
        </a>
        <a
          href="/blog/1"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
        >
          Blog Details
        </a>
       
      </div>

      {/* Hamburger Icon - Mobile Only */}
      <div className="lg:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-sans text-lg uppercase tracking-wide">
          <a href="/" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a href="/blogs" onClick={() => setIsOpen(false)}>
            Blogs
          </a>
          <a href="/blog/1" onClick={() => setIsOpen(false)}>
            Blog Details
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
