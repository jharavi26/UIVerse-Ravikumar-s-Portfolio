import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import NavbarBtn from "./NavbarBtn";
import NavbarLogo from "./NavbarLogo";


function NavbarMain() {
  const [menuOpen ,  setMenuOpen] = useState(false);

 

  return (
    <nav className="max-w-[1000px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[800px] mx-auto bg-black items-center p-6 rounded-full border-2 border-orange-500">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLink />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        {/* <NavbarToggler /> */}
      </div>
    </nav>
  );
}

export default NavbarMain;
