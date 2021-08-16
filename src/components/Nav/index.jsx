import React from "react";
import { navLinks } from "../../services/config";
import { Link } from "react-router-dom";
import "./styles.css";

const Nav = () => (
  <nav>
    <Logo />
    <Links />
  </nav>
);

export default Nav;

const Links = () => (
  <ol>
    {navLinks.map(({ url, name }, i) => (
      <li key={url}>
        <a href={url}>
          <span className="cl-green">{`0${i + 1}. `}</span>
          <span className="cl-white"> {name}</span>
        </a>
      </li>
    ))}
  </ol>
);

const Logo = () => (
  <a href="/" aria-label="home">
    <svg
      width="42"
      height="42"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128 32C74.9807 32 32 74.9807 32 128V384C32 437.019 74.9807 480 128 480H384C437.019 480 480 437.019 480 384V128C480 74.9807 437.019 32 384 32H128ZM168 108C156.954 108 148 116.954 148 128C148 139.046 156.954 148 168 148H324V272C324 322.81 282.81 364 232 364H168C156.954 364 148 372.954 148 384C148 395.046 156.954 404 168 404H232C304.902 404 364 344.902 364 272V144C364 124.118 347.882 108 328 108H168Z"
        fill="#0a192f"
      />
    </svg>
  </a>
);
