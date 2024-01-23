import React from "react";
import Logo from "../images/everglo-logo.png";
import { useLocation } from "react-router-dom";

const NavbarLG = () => {
  const location = useLocation;

  return (
    <>
      <nav className="bg-slate-900 fixed w-full top-0 z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex w-auto h-9 items-center jutify-center">
              <img
                className="h-16 w-56 object-cover mt-8"
                src={Logo}
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLG;
