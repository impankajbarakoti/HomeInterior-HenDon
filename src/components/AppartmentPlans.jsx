import React from "react";

const plans = [
  { label: "APARTMENT" },
  { label: "SIMPLEX" },
  { label: "DUPLEX" },
  { label: "DOUBLE HEIGHT" },
  { label: "STUDIO" },
  { label: "PENTHOUSE" },
];

const details = {
  floor: 4,
  rooms: 4,
  area: 310,
  parking: 1,
  description:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
};

const ApartmentPlans = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-[#93725c]">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-serif text-center text-black tracking-widest mb-3">
        APARTMENT PLANS
      </h2>
      <p className="text-center text-sm sm:text-base uppercase tracking-widest mb-12 text-[#c69c6d]">
        AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-8 lg:gap-x-8">
        {/* Left Menu */}
        <nav className="bg-[#faf5f3] w-full max-w-xs p-8 text-sm sm:text-base font-medium space-y-6 uppercase">
          {plans.map((plan) => (
            <div
              key={plan.label}
              className="cursor-pointer hover:text-[#c69c6d] border-b border-transparent hover:border-[#c69c6d] pb-1"
            >
              {plan.label}
            </div>
          ))}
        </nav>

        {/* Center Image */}
        <div className="flex-shrink-0 max-w-3xl">
          <img
            src="https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-1.png"
            alt="Apartment Plan"
            className="w-full object-contain"
          />
        </div>

        {/* Right Details */}
        <aside className="max-w-md w-full flex flex-col space-y-6">
          <div className="w-full">
            {[
              { label: "Floor", value: details.floor },
              { label: "Rooms", value: details.rooms },
              { label: "Area m²", value: details.area },
              { label: "Parking", value: details.parking },
            ].map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 py-2 border-b border-gray-300"
              >
                <div className="uppercase tracking-wide text-[#c69c6d] text-sm sm:text-base">
                  {item.label}
                </div>
                <div className="text-right text-black text-sm sm:text-base">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 font-serif text-sm sm:text-base">
            {details.description}
          </p>

          <button className="border border-[#c69c6d] text-[#c69c6d] uppercase tracking-widest py-3 px-8 self-start hover:bg-[#c69c6d] hover:text-white transition">
            Schedule
          </button>
        </aside>
      </div>
    </section>
  );
};

export default ApartmentPlans;
