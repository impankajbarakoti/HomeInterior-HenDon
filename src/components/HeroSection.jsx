import React, { useEffect, useState } from "react";

const leftImages = [
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-rev-background-2.jpg",
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-rev-background-3.jpg",
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/home-1-rev-background-1.jpg",
];

const rightImages = [
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/home-1-rev-img-3.png",
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-rev-img-1.png",
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-rev-img-2.png",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* LEFT Background images with fade + zoom */}
      {leftImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 animate-zoomIn" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* RIGHT image overlay */}
      <div
        className="absolute top-0 right-0 h-full w-1/2 bg-no-repeat bg-right bg-contain transition-all duration-1000 pointer-events-none"
        style={{
          backgroundImage: `url(${rightImages[currentIndex]})`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif">
          RESIDENCE
        </h1>
        <p className="mt-4 tracking-widest text-xs sm:text-sm md:text-lg uppercase text-accent">
          Introducing a new way to showcase properties
        </p>

        {/* Scroll icon */}
        <div className="mt-10 flex justify-center animate-bounce">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-white text-xl">↓</span>
          </div>
        </div>
      </div>

      {/* Zoom animation */}
      <style>
        {`
          @keyframes zoomIn {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

          .animate-zoomIn {
            animation: zoomIn 5s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
