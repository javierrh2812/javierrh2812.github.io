import React from "react";
import "./styles.css";

const Hero = () => {
  const one = <h1>Hello, my name is</h1>;
  const two = <h2 className="big-heading">Javier Ramos.</h2>;
  const three = <h3 className="big-heading">I build things</h3>;
  const four = (
    <p>
      I'm a peruvian student of Systems Engerineering (CS?) interested in web
      dev, data science, machine learning and devops. Currently working with
      MERN stack.
    </p>
  );
  const five = (
    <a href="mailto:javier281297@gmail.com" className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <section className="hero">
      {items.map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </section>
  );
};

export default Hero;
