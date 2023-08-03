"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home" className="bg-purple-100 py-16 sm:py-32 md:py-48">
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-purple-800">
            Salut, je suis Mohamed Sami !
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-purple-600">
            Software Developer{" "}
            <span className="font-semibold">
              I specialize in building innovative software solutions to meet your needs. With expertise in various programming languages and frameworks, I can create web and mobile applications tailored to your requirements.
            </span>
          </p>
          <Link
            to="projects"
            className="text-white font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-purple-600" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
