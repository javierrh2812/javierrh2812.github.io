import React from "react";
import "./styles.css";

/*
const StyledHeroSection = styled.section`
*/

const Hero = () => {
  const one = <h1>Hola, mi nombre es</h1>;
  const two = <h2 className="big-heading">Javier Ramos.</h2>;
  const three = <h3 className="big-heading"></h3>;
  const four = (
    <p>
      Soy un estudiante de Ingeniería de Sistemas de Información interesado en
      desarrollo web, data sciente y devops. Actualmente, tengo experiencia
      pre-profesional en MERN stack.
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
        <div key={i}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;
