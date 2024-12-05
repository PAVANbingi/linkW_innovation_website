"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Pavan Kumar",
      role: "Founder, CEO",
      image: "/BPK.png",
      linkedin: "https://www.linkedin.com/in/pavan-kumar-bingi-7a7a7a2a6/recent-activity/all/",
      instagram: "https://www.instagram.com/pavan_kumar_bingi_/",
      email: "mailto:bingipavankumar63@gmail.com",
    },{
      name: "Pavan Kumar",
      role: "Founder, CEO",
      image: "/BPK2.png",
      linkedin: "https://www.linkedin.com/in/pavan-kumar-bingi-7a7a7a2a6/recent-activity/all/",
      instagram: "https://www.instagram.com/pavan_kumar_bingi_/",
      email: "mailto:bingipavankumar63@gmail.com",
    },{
      name: "Pavan Kumar",
      role: "Founder, CEO",
      image: "/BPK3.png",
      linkedin: "https://www.linkedin.com/in/pavan-kumar-bingi-7a7a7a2a6/recent-activity/all/",
      instagram: "https://www.instagram.com/pavan_kumar_bingi_/",
      email: "mailto:bingipavankumar63@gmail.com",
    },{
      name: "Pavan Kumar",
      role: "Founder, CEO",
      image: "/pk.jpg",
      linkedin: "https://www.linkedin.com/in/pavan-kumar-bingi-7a7a7a2a6/recent-activity/all/",
      instagram: "https://www.instagram.com/pavan_kumar_bingi_/",
      email: "mailto:bingipavankumar63@gmail.com",
    },
    // Add the rest of your team members similarly
  ];

  return (
    <section className="bg-slate-950 text-gray-300 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-center text-white hover:text-rose-600">Meet Our Team</h2>
        <p className="text-center text-lg mb-12 text-gray-400">
          Meet the extraordinary individuals driving LinkW Innovations forward. 
          Our team is committed to revolutionizing the agricultural and industrial 
          sectors with passion, innovation, and expertise.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
            >
              {/* Team Member Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition duration-300 group-hover:grayscale"
              />

              {/* Overlay with Social Icons */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-pink-400"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={member.email}
                    className="text-white text-2xl hover:text-red-400"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Team Member Info */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

