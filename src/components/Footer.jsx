// src/components/Footer.jsx

// import React, { useState, useEffect } from "react";

const Footer = () => {
  // Scroll to top visibility state
  // const [isVisible, setIsVisible] = useState(false);

  // Show the scroll to top button when the user scrolls down
  // const toggleVisibility = () => {
  //   if (window.scrollY > 300) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };
  // Scroll to top functionality
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // Add scroll event listener to show/hide scroll button
  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility);
  //   };
  // }, []);

  return (
    <footer className="bg-[#1a0e0a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold uppercase">Contact</h4>
          <p className="text-sm mt-4">
            Find out all the ways to enjoy luxury residential life around the
            world.
          </p>
          <p className="mt-4">A: SeeStrasse 21, Zurich, CH</p>
          <p>T: 99 4 11 78 70 14</p>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-lg font-semibold uppercase">FAQ</h4>
          <ul className="mt-4">
            <li>How to schedule a viewing?</li>
            <li>Which pricing plan do I pick?</li>
            <li>How to choose the right room?</li>
            <li>How long does the process take?</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h4 className="text-lg font-semibold uppercase">Useful Links</h4>
          <ul className="mt-4">
            <a href="/">
              {" "}
              <li>Home</li>
            </a>
            <a href="/about">
              {" "}
              <li>About</li>
            </a>
            <a href="/contact">
              {" "}
              <li>Contact</li>
            </a>
           <a href="/blogs"> 
              {" "}
              <li>Blogs</li>
            </a>
            <a href="/blog/1"> 
              {" "}
              <li>Blog Details</li>
            </a>
            </ul>
        </div>

        {/* ENQUIRE */}
        <div>
          <h4 className="text-lg font-semibold uppercase">Enquire</h4>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-transparent border-b border-white text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 bg-transparent border-b border-white text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#b47b56] text-white uppercase tracking-wide hover:bg-[#a46947] transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Underline Below the Footer */}
      <div className="border-t border-[#b47b56] mt-16 pt-6 text-center">
        <p className="text-sm text-gray-300">
          Made with knowledge for{" "}
          <span className="text-[#b47b56]">Qode Interactive</span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      {/* {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10  text-white   p-3  shadow-lg  border-1 "
        >
          ^
        </button>
      )} */}
    </footer>
  );
};

export default Footer;
