import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Darrell Berges",
    title: "Owner",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/team-img-1.jpg",
  },
  {
    id: 2,
    name: "Merrin Dardenne",
    title: "Architect",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/team-img-2.jpg",
  },
  {
    id: 3,
    name: "Ivet Houze",
    title: "Architect Assistant",
    image:
      "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/team-img-3.jpg",
  },
];

const MeetTheTeam = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const toggleOverlay = (id) => {
    setActiveOverlay(activeOverlay === id ? null : id);
  };

  return (
    <section className="bg-[#1a0e0a] py-20 px-6 text-center text-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold uppercase"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet the Team
        </h2>
        <p className="mt-4 text-lg md:text-xl font-sans">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden group"
              onClick={() => toggleOverlay(member.id)} // mobile tap
            >
              {/* Image container */}
              <div className="relative w-full h-[400px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay text */}
                <div
                  className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-500
                    ${activeOverlay === member.id ? "opacity-100" : "opacity-0"}
                    group-hover:opacity-100
                  `}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-lg text-[#b47b56]">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
