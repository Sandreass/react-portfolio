import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-white text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-block text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
