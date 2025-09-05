// // src/components/ShowCase.jsx
// import React from "react";

// const IMAGE_1 =
//   "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/apart-img-1.jpg";
// const IMAGE_2 =
//   "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/apart-img-2.jpg";

// const ShowCase = () => {
//   return (
//     <section className="flex flex-col lg:flex-row items-center lg:items-stretch w-full bg-[#faf9f6] min-h-screen">
//       {/* Left Side - Text */}
//       <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 py-16 md:px-16 lg:pl-20">
//         <h1
//           className="text-[40px] sm:text-[56px] lg:text-[64px] xl:text-[60px]  leading-tight uppercase text-gray-900"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Modern <br />
//           Spaces And <br />
//           Premium <br />
//           Apartment <br />
//           Complexes
//         </h1>

//         {/* Subtitle */}
//         <p
//           className="mt-8 text-base sm:text-lg lg:text-xl tracking-[0.35em] uppercase text-[#b08c74]"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           Welcome To Hendon <br /> Residence Showcase
//         </p>

//         {/* Arrow Button */}
       
//       </div>

//       {/* Right Side - Images */}
//       <div className="relative w-full lg:w-[60%] flex items-center justify-center py-16 lg:py-0">
//         {/* Back Image */}
//         <img
//           src={IMAGE_1}
//           alt="Bedroom"
//           className="w-[320px] h-[400px] sm:w-[420px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[560px] lg:h-[660px] object-cover shadow-xl"
//         />

//         {/* Front Image */}
//         <img
//           src={IMAGE_2}
//           alt="Apartment"
//           className="absolute w-[260px] h-[220px] sm:w-[340px] sm:h-[300px] md:w-[800px] md:h-[340px] lg:w-[440px] lg:h-[580px] object-cover shadow-2xl border-4 border-[#b08c74] left-[52%] top-[26%]"
//         />
//       </div>
//     </section>
//   );
// };

// export default ShowCase;

// src/components/ShowCase.jsx
// src/components/ShowCase.jsx
import React from "react";

const IMAGE_1 =
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/apart-img-1.jpg";
const IMAGE_2 =
  "https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/apart-img-2.jpg";

const ShowCase = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-stretch w-full bg-[#faf9f6] min-h-screen">
      {/* Left Side - Text */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:pl-20 py-10 sm:py-16">
        <h1
          className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-tight uppercase text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Modern <br />
          Spaces And <br />
          Premium <br />
          Apartment <br />
          Complexes
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#b08c74]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome To Hendon <br /> Residence Showcase
        </p>
      </div>

      {/* Right Side - Images */}
      <div className="relative w-full lg:w-[60%] flex items-center justify-center py-10 sm:py-16 lg:py-0">
        {/* Back Image */}
        <img
          src={IMAGE_1}
          alt="Bedroom"
          className="w-[250px] mr-6 h-[300px] sm:w-[360px] sm:h-[460px] md:w-[460px] md:h-[580px] lg:w-[540px] lg:h-[560px] object-cover shadow-xl "
        />

        {/* Front Image */}
        <img
          src={IMAGE_2}
          alt="Apartment"
          className="absolute w-[190px] h-[260px] sm:w-[280px] sm:h-[220px] md:w-[360px] md:h-[300px] lg:w-[440px] lg:h-[360px] xl:w-[480px] xl:h-[470px] object-cover shadow-2xl border-4 border-[#b08c74] left-[40%] top-[36%]"
        />
      </div>
    </section>
  );
};

export default ShowCase;
