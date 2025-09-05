

import React from "react";

const Requestreview = () => {
  return (
    <section
      className="relative bg-repeat-x bg-center py-32 px-4"
      style={{
        backgroundImage:
          "url('https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-parallax-1.jpg')",
      }}
    >
      <div className="bg-[#f9f6f2] max-w-2xl mx-auto p-10 md:p-16 shadow-lg text-left">
        <h2
          className="text-3xl md:text-4xl uppercase text-center mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Request a Visit
        </h2>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm uppercase tracking-widest text-gray-600 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border-b border-gray-300 focus:outline-none bg-transparent placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm uppercase tracking-widest text-gray-600 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-300 focus:outline-none bg-transparent placeholder-gray-400"
              placeholder="Your email"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm uppercase tracking-widest text-gray-600 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full border-b border-gray-300 focus:outline-none bg-transparent text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm uppercase tracking-widest text-gray-600 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full border-b border-gray-300 focus:outline-none bg-transparent text-gray-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm uppercase tracking-widest text-gray-600 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full border-b border-gray-300 focus:outline-none bg-transparent placeholder-gray-400 resize-none"
              placeholder="Your message"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#b47b56] hover:bg-[#a46947] text-white tracking-widest uppercase py-3 transition duration-300"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Requestreview;
