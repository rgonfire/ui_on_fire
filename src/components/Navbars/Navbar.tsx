import React from "react";
import classnames from "classnames";
import { InterfaceNavbarProps } from "./Navbar.d";

const Button = ({
  children,
  classNames,
}: InterfaceNavbarProps): JSX.Element => {
  return <nav className={classnames("nav", classNames)}>{children}</nav>;
};

export default Button;
