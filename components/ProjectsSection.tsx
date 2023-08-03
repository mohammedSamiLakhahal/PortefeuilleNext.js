import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Système de gestion de bibliothèque",
    description:
      "Le système de gestion de bibliothèque est une application web développée pour gérer les opérations de la bibliothèque, y compris l'authentification, l'autorisation et les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Ce projet vise à fournir un moyen fluide et efficace de gérer les ressources de la bibliothèque et d'améliorer l'expérience utilisateur.",
    image: "/Library.png",
    github: "https://github.com/mohammedSamiLakhahal/Library"
  },
  {
    name: "Crud-Operation-Node.js",
    description: "Ce code représente un ensemble de fonctions de contrôleur qui gèrent les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des réservations d'hébergement. Ces fonctions sont construites à l'aide du framework Express.js et utilisent le package express-validator pour la validation des entrées.",
    image: "/website2.png",
    github: "https://github.com/mohammedSamiLakhahal/Crud-Operation-Node.js",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl mb-8 text-gray-800">
          Projets
        </h1>
        <hr className="w-6 h-1 mx-auto mb-8 bg-teal-500 border-0 rounded" />

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => {
            return (
              <SlideUp key={idx} offset="-300px 0px -300px 0px">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:space-x-8">
                  <div className="md:w-1/2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 md:w-1/2">
                    <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                      {project.name}
                    </h1>
                    <p className="text-base md:text-lg leading-7 mb-6 text-gray-600">
                      {project.description}
                    </p>

                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-teal-500"
                        />
                      </Link>                        
                      <span className="flex items-center text-teal-500">
                        Voir plus
                        <BsArrowUpRightSquare className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
