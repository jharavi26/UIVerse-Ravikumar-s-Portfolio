import React from "react";
import { Link } from "react-scroll";
import "./Style.css";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="navbar-links">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={link.section}
          >
            {link.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
