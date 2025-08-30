import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Node.js",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce app using MERN stack",
      link: "#",
    },
    {
      title: "Blog App",
      description: "A blogging platform with authentication and CRUD features",
      link: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Socket.io and Node.js",
      link: "#",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
