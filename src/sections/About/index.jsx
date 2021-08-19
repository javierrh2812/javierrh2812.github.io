import React from "react";
import { skills } from "../../services/config";

const About = () => (
  <section id="about">
    <h2 className="numbered-heading">About Me</h2>
    <div className="inner">
      <div>
        <p>
          Hello! My name is Javier and I enjoy creating things that live on the
          internet. My interest in web development started back in 2019
        </p>

        <p>Here are a few technologies I've been working with recently:</p>
      </div>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
