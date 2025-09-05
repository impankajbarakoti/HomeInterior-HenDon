import React from "react";

const SmartLivingComponent = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Left Image */}
      <div className="relative w-full h-[450px] md:h-[650px]">
        <img
          src="https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-video-buton-img.jpg"
          alt="Conference Hall"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Content */}
      <div className="px-6 md:px-12 lg:pl-16 py-12 lg:py-0">
        {/* Title */}
        <h2
          className="text-[36px] md:text-[52px] leading-[1.2] font-normal uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Values Of <br />
          Smart Living <br />
          In Vista <br />
          Residence
        </h2>

        {/* Subtitle */}
        <p
          className="mt-8 text-[15px] md:text-[17px] tracking-[0.35em] uppercase text-[#b08c74]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          At Vero Eos Et Accus Amus <br />
          Et Ius To Odio Dignissimos
        </p>

        {/* List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 text-[17px] md:text-[18px]">
          {[
            "wellness",
            "fitness",
            "wellness",
            "conference",
            "library",
            "conference",
            "restaurant",
            "bars",
            "restaurant",
            "shopping",
            "fashion",
            "shopping",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="text-[#b08c74] mr-3 text-xl">›</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartLivingComponent;
