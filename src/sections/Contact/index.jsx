import React from "react";
import { socialMedia } from "../../services/config";
import Icon from "../../images/icons.jsx";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="numbered-heading">Contact</h2>
      <ul>
        {socialMedia.map(({ name, url }, i) => (
          <li key={i}>
            <Icon name={name} />
            <a href={url} aria-label={name}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
