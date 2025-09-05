

import React from "react";

const Blg = () => {
  return (
    <section
      className="relative bg-cover bg-center w-screen h-screen py-48 px-6"
      style={{
        backgroundImage:
          "url('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/blog-title-img-1.jpg')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h1
          className="text-5xl md:text-7xl leading-tight tracking-wider uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          BLOGS
        </h1>
        <p
          className="mt-6 text-xl md:text-2xl leading-relaxed tracking-widest"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
        </p>
      </div>
    </section>
  );
};

export default Blg;
