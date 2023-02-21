/**
 * @description Types definitions Navbar
 */
import { ReactNode } from "react";

// Const assertions
// Union types with string literals
// Match de clases

export interface InterfaceNavbarProps {
  /**
   * Inside element
   */
  children: ReactNode;
  /**
   * Custom classname
   */
  classNames?: string;
}
