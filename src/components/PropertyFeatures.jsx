import React from "react";

const features = [
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-1.png",
    label: "RESIDENCE",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-4.png",
    label: "ECO LIVING",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-5.png",
    label: "QUALITY",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-6.png",
    label: "INFO DESK",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-2.png",
    label: "RECEPTION",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/prop-icon-3.png",
    label: "HELP 24/7",
  },
];

const PropertyFeatures = () => {
  return (
    <section
      className="w-full py-16"
      style={{
        backgroundImage:
          "url('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/counter-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {features.map(({ icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-white border-opacity-30 w-full h-40 sm:h-44 lg:h-48 backdrop-blur-sm bg-opacity-5 hover:bg-amber-50/30 transition duration-300 rounded-xl shadow-md"
          >
            <img
              src={icon}
              alt={label}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-3 transition duration-300"
            />
            <span className="text-white text-sm sm:text-base font-serif tracking-widest text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyFeatures;
