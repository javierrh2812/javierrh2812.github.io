import React from "react";
import { navLinks } from "../../services/config";
import { MenuIcon, Favicon } from "../../images/icons";

const width = 460;
const Nav = () => {
  const [show, setShow] = React.useState(
    window.innerWidth < width ? false : true
  );
  const posRef = React.useRef(0);
  const widthRef = React.useRef(window.innerWidth);

  React.useEffect(() => {
    const controlPosY = () => {
      if (widthRef.current < width) return null;
      setShow(window.scrollY > posRef.current ? false : true);
      posRef.current = window.scrollY;
    };

    const controlWidth = () => {
      widthRef.current = window.innerWidth;
      setShow(widthRef.current < width ? false : true);
    };

    window.addEventListener("scroll", controlPosY);
    window.addEventListener("resize", controlWidth);

    return () => {
      window.removeEventListener("scroll", controlPosY);
      window.removeEventListener("resize", controlWidth);
    };
  }, []);

  const toggle = () => setShow(!show);

  return (
    <>
      <button className="burgerToggler" onClick={toggle}>
        <MenuIcon />
      </button>
      <nav
        className={`navbar ${
          widthRef.current < width ? show && "show" : !show && "hide"
        }`}
      >
        <Logo id="logo" />
        <Links />
      </nav>
    </>
  );
};

export default Nav;

const Links = React.memo(() => (
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
));

const Logo = React.memo(() => ( <a id="home" href="#hero" aria-label="home"> <Favicon /> </a>));
