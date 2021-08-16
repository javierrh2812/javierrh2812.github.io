import React from "react";
import { IconGithub, IconFolder, IconExternal } from "../../images/icons";

const ProyectCard = ({ proyect }) => {
  const { title, description, tech, repository, demo } = proyect;

  return (
    <div className="project-inner">
      <div className="flex-between proyect-header">
        <div className="folder">
          <IconFolder />
        </div>
        <div className="project-links">
          {repository && (
            <a
              href={repository}
              aria-label="GitHub Link"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              aria-label="External Link"
              className="external"
              target="_blank"
              rel="noreferrer"
            >
              <IconExternal />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">
        <a href={demo} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>

      <p>{description}</p>
      <footer>
        {tech && (
          <ul className="project-tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
      </footer>
    </div>
  );
};

export default ProyectCard;
