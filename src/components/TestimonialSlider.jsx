// src/components/TestimonialSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "DARRELL BERGES",
    role: "O W N E R",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/testimonial-img-1.png",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blantium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique suntinculpa.",
  },
  {
    name: "DARRELL BERGES",
    role: "A R C H I T E C T ",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/testimonial-img-2.png",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate asperiores modi dicta fugiat, nesciunt reiciendis voluptatem eaque ab atque molestias repellendus doloremque.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#f9f6f2] py-24 px-4 text-center relative">
      <div className="max-w-4xl mx-auto">
        <div
          className="text-4xl md:text-5xl uppercase mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <div className="text-[#b47b56] text-4xl mb-2">””</div>
          Testimonials
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
          }}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={30}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <p
                className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                “{item.quote}”
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4
                className="text-sm md:text-base tracking-widest uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.name}
              </h4>
              <p className="text-[#b47b56] tracking-widest text-xs uppercase mt-1">
                {item.role}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows - hidden on mobile */}
        <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2">
          <button className="prev-arrow text-[#b47b56] text-2xl border border-[#b47b56] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b47b56] hover:text-white transition">
            ←
          </button>
        </div>
        <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2">
          <button className="next-arrow text-[#b47b56] text-2xl border border-[#b47b56] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#b47b56] hover:text-white transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
