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
            Hola! Mi nombre es Javier and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML
            &amp; CSS!
          </p>

          <p>
            Fast-forward to today, and I've had the privilege of working at{" "}
          </p>

          <p>
            Aquí hay algunas tecnologías con las que he trabajado recientemente:
          </p>
        </div>

        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default About;
