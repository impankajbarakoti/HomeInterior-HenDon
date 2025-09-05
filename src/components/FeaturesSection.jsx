// src/components/FeaturesSection.jsx
import React from "react";

const features = [
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-1.png",
    title: "Smart Living",
    desc: "At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-2.png",
    title: "Eco Construction",
    desc: "At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-3.png",
    title: "Human in Mind",
    desc: "At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-4.png",
    title: "Attractive Location",
    desc: "At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-5.png",
    title: "Modern Technology",
    desc: "At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium",
  },
  {
    icon: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-6.png",
    title: "Awarded Design",
    desc: "At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-black py-24 lg:py-36 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white group"
          >
            {/* Icon with golden circle outline */}
            <div
              className="w-28 h-28 mb-6 flex items-center justify-center rounded-full border border-[#b08c74] p-6 
              transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-[120px] object-contain"
              />
            </div>

            {/* Title */}
            <h3
              className="text-xl sm:text-2xl font-light uppercase mb-4 tracking-[0.25em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xs"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
