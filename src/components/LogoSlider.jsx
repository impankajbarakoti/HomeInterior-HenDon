// src/components/LogoSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const logos = [
  {
    id: 1,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-6.png",
    alt: "Lorem Ipsum",
  },
  {
    id: 2,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-7-1.png",
    alt: "Real Estate",
  },
  {
    id: 3,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-1.png",
    alt: "Luxury Home",
  },
  {
    id: 4,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-2.png",
    alt: "Pariatur",
  },
  {
    id: 5,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-3.png",
    alt: "Victor",
  },
  {
    id: 6,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-4.png",
    alt: "Green Home",
  },
  {
    id: 7,
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-5.png",
    alt: "Green Home",
  },
];

const LogoSlider = () => {
  return (
    <section className="bg-[#f9f6f2] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1} // 1 logo per slide on mobile by default
          spaceBetween={30} // Space between logos
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 logo on small screens (mobile)
            },
            768: {
              slidesPerView: 3, // 3 logos on medium screens (tablet)
            },
            1024: {
              slidesPerView: 6, // 6 logos on large screens (desktop)
            },
          }}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex justify-center items-center transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="transition duration-300 grayscale hover:grayscale-0 hover:filter-none hover:brightness-125"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
