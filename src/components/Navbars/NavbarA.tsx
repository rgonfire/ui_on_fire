import React from "react";
import classnames from "classnames";
import { InterfaceNavbarAProps } from "./NavbarA.d";
import Logo from "../../assets/icons/svgs/logo.svg";

const NavbarA = ({ classNames }: InterfaceNavbarAProps): JSX.Element => {
  return (
    <nav className={classnames("nav-a", classNames)}>
      <div className="">
        <img src={Logo} />
      </div>
      <div>
        <ul className="flex flex-row gap-x-2">
          <li>Home</li>
          <li>Services</li>
          <li>Doc</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarA;
