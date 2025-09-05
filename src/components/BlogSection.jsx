import React from "react";

const blogs = [
  {
    date: "4 MAY 2020",
    title: "SAFE FOR KIDS",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-blog-list-img-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci",
  },
  {
    date: "27 APR 2020",
    title: "BEDROOM IDEAS",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-blog-list-img-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#1a0e0a] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Text Column */}
        <div className="lg:w-1/3">
          <h2
            className="text-4xl md:text-5xl  leading-snug uppercase tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stylish <br />
            News From <br />
            Our Blog <br />
            Read, Enjoy <br />& Learn
          </h2>
          <p className="text-[#b47b56] mt-6 tracking-widest text-sm uppercase">
            At vero eos et accus <br /> amuset iusto odio
          </p>
        </div>

        {/* Blog Cards */}
        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div key={index}>
              <div className="overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="transition-transform duration-500 hover:translate-x-2"
                />
                <div className="absolute top-4 left-4 bg-[#1a0e0a] text-sm px-4 py-1 tracking-widest">
                  {blog.date}
                </div>
              </div>
              <h3
                className="mt-6 text-xl font-semibold uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {blog.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300 font-sans">
                {blog.description}
              </p>
              <div className="mt-4">
                <button className="border-b border-[#b47b56] text-[#b47b56] text-xl hover:text-white transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
