import React from "react";
import ProyectCard from "./card.jsx";
import Meme from "../../images/meme.jpeg";
import { proyects } from "../../services/config";

const Projects = () => (
  <section id="work">
    <h2 className="numbered-heading">Proyects</h2>
    <img src={Meme} />
    <div className="projects-grid">
      {proyects.map((proyect, i) => (
        <ProyectCard proyect={proyect} key={i} />
      ))}
    </div>
  </section>
);

export default Projects;
