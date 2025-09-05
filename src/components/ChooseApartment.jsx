// src/components/ChooseApartment.jsx
import React from "react";

const apartments = [
  {
    id: 1,
    title: "WEST COMPLEX",
    desc: "FROM 120 M2",
    img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-1-768x586.jpg",
  },
  {
    id: 2,
    title: "APARTMENT BLOCK",
    desc: "FROM 120 M2",
    img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-2-768x586.jpg",
  },
  {
    id: 3,
    title: "EAST COMPLEX",
    desc: "FROM 120 M2",
    img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-3-768x586.jpg",
  },
  {
    id: 4,
    title: "MODERN STUDIO",
    desc: "FROM 120 M2",
    img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-4-768x586.jpg",
  },
  {
    id: 5,
    title: "SOUTH COMPLEX",
    desc: "FROM 120 M2",
    img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-5-768x586.jpg",
  },
  {
    id: 6,
    title: "MODERN SUITE",
    desc: "FROM 120 M2",
    img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-6-768x586.jpg",
  },
];

const ChooseApartment = () => {
  return (
    <section className="w-full py-16 bg-white text-center">
      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-light uppercase mb-4 tracking-wider"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Choose an Apartment
      </h2>

      {/* Subtitle */}
      <p
        className="uppercase text-sm sm:text-base tracking-[0.35em] text-gray-500 mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        At Vero Eos Et Accusamus Et Iusto Odio
      </p>

      {/* Apartment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {apartments.map((apt) => (
          <div key={apt.id} className="flex flex-col items-center">
            <div className="overflow-hidden w-full">
              <img
                src={apt.img}
                alt={apt.title}
                className="w-full h-[260px] object-cover transform transition duration-500 ease-in-out hover:translate-x-4"
              />
            </div>
            <h3
              className="mt-4 text-lg font-medium uppercase text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {apt.title}
            </h3>
            <p className="text-sm tracking-widest text-gray-500">{apt.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button
          className="px-8 py-3 border border-[#a96f4f] text-[#a96f4f] uppercase tracking-[0.25em] text-sm hover:bg-[#a96f4f] hover:text-white transition"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Request
        </button>
      </div>
    </section>
  );
};

export default ChooseApartment;
