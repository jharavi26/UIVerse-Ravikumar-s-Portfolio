import React from "react";

import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import "./Style.css";
import NavbarLogo from "../NavbarLogo";

function NavbarMain() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavbarLogo />
        <NavbarLink />
        <NavbarBtn />
        <div className="toggle">


        </div>
      </div>
    </nav>
  );
}

export default NavbarMain;
