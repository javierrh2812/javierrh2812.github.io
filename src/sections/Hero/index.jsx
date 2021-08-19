import React from "react";
import { presentation } from "../../services/config";

const Hero = () => {
  const { hello, name, phrase, email, description } = presentation;
  return (
    <section id="hero" className="hero">
      <h1>{hello}</h1>
      <h2 className="big-heading">{name}.</h2>
      <h3 className="big-heading">{phrase}</h3>
      <p>{description}</p>
      <a href={`mailto:${email}`} className="email-link">
        Get In Touch
      </a>
    </section>
  );
};

export default Hero;
