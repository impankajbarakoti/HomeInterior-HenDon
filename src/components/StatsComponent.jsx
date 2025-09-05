import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "412", label: "SQUARE AREAS" },
    { number: "519", label: "CAR PARKING" },
    { number: "170", label: "APARTMENTS" },
    { number: "262", label: "ROOMS" },
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/home-1-background-patern-1.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            {/* Big faded number in background */}
            <span
              className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] text-[#e5cbbd] opacity-50 leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.number}
            </span>

            {/* Foreground label (perfectly centered) */}
            <span
              className="absolute inset-0 flex items-center justify-center text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] mt-9 tracking-[0.3em] uppercase font-medium text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
