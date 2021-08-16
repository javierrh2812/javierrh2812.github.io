import React from "react";
import ProyectCard from "./card.jsx";
import "./styles.css";
import Meme from "../../images/meme.jpeg";

const myproh = [
  {
    title: "Portfolio",
    description: "Portafolio personal",
    tech: ["React", "CSS", "ViteJS"],
    repository: "https://github.com/javierrh2812/javierrh2812.github.io",
    demo: "https://javierrh2812.github.io",
  },
  {
    title: "MatriculaXD",
    description: "Sistema de matrícula",
    tech: ["Java", "Javascript", "Spring Framework", "SQL"],
    repository: "https://github.com/javierrh2812/matricula-experimentos",
    demo: "https://matricula-disexp.herokuapp.com",
  },
  {
    title: "QueueOverflow",
    description: "Clon de stack overflow",
    tech: ["Java", "Javascript", "Spring Framework", "SQL"],
    repository: "https://github.com/javierrh2812/queue-overflow-web",
    demo: undefined,
  },
  {
    title: "BonoCorp",
    description: "Proyecto para gestionar bonos corporativos",
    tech: ["Java", "Spring Framework", "SQL"],
    repository: "https://github.com/javierrh2812/BonoCorp",
    demo: undefined,
  },
];

const Projects = () => {
  return (
    <section id="proyects">
      <h2>Proyects</h2>

      <img src={Meme} />

      <div className="projects-grid">
        {myproh.map((proyect, i) => (
          <ProyectCard proyect={proyect} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
