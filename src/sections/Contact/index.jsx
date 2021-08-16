import React from "react";
import "./styles.css";

const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/javierrh2812",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/javierrh2812",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/javier281297",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/javierrh2812",
  },
];
const About = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <ul>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                {name}
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default About;
