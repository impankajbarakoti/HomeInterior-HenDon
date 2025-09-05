// src/components/ScheduleVisit.jsx
import React from "react";

const ScheduleVisit = () => {
  return (
    <section
      className="relative w-full h-full p-20 flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "url('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/counter-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#a96f4f]/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Title */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[68px] font-light uppercase text-white mb-8 tracking-[0.3em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Schedule a Visit
        </h1>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-lg md:text-[23px] uppercase text-white tracking-widest leading-relaxed mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos <br/>
                  Duc Blanditiis
          Praesentium Voluptatum
        </p>

        {/* Button */}
        <button
          className="px-12 py-5 border-2 border-white bg-white/90 hover:bg-white text-[#a96f4f] text-lg tracking-[0.25em] uppercase shadow-lg transition"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Request
        </button>
      </div>
    </section>
  );
};

export default ScheduleVisit;
