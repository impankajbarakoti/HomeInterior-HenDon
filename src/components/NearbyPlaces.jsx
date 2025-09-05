import React from "react";

const NearbyPlaces = () => {
  const places = [
    { name: "SCHOOL", distance: "250m far", top: "65%", left: "20%" },
    { name: "PARKS", distance: "200m far", top: "50%", left: "35%" },
    { name: "SHOPPING MALL", distance: "150m far", top: "35%", left: "50%" },
    { name: "RESTAURANT", distance: "200m far", top: "55%", left: "75%" },
    { name: "HOSPITAL", distance: "250m far", top: "40%", left: "90%" },
  ];

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          "url('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/slider-background-img-1.jpg')",
      }}
    >
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
        {/* Map */}
        <img
          src="https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-background-patern-3.png"
          alt="Map"
          className="max-w-full max-h-full object-contain"
        />

        {/* Markers */}
        {places.map((place, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{ top: place.top, left: place.left }}
          >
            {/* Marker Circle */}
            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-[#a65c3e] bg-white shadow-md"></div>

            {/* Line */}
            <div className="w-px h-8 sm:h-10 md:h-14 bg-gray-400"></div>

            {/* Label */}
            <div className="text-center mt-1 sm:mt-2">
              <h3 className="text-[9px] sm:text-[11px] md:text-sm tracking-[0.2em] text-[#a65c3e] font-semibold uppercase">
                {place.name}
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600">
                {place.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyPlaces;
