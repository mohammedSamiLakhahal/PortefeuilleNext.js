import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Node.js" },
  { skill: "Jquery" },
  { skill: "React" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl mb-8 text-teal-500">
          À propos de moi
          <hr className="w-16 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col md:flex-row md:text-left">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-center md:text-left text-2xl font-bold mb-6">
              Faisons connaissance !
            </h1>
            <p className="text-gray-700">
              Salut, je m appelle Mohamed Sami et je suis un{" "}
              <span className="font-bold">développeur logiciel</span>{" "}
              <span className="font-bold">hautement ambitieux</span>,{" "}
              <span className="font-bold">motivé par moi-même</span> et{" "}
              <span className="font-bold">déterminé</span>.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h1 className="text-2xl font-bold mb-6">Mes Compétences</h1>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-500 text-white px-4 py-2 mr-2 mt-2 rounded-lg font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
