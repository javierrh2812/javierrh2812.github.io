import React from "react";
import "./styles.css";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "MongoDB, Mongoose",
    "Spring Framework (Java)",
    "Python, Docker",
  ];

  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <div>
          <p>
            Hello! My name is Javier and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
          </p>

          <p>Here are a few technologies I've been working with recently:</p>
        </div>

        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default About;
