/**
 * @description Type definitions Button
 */

import { ReactNode, ButtonHTMLAttributes } from "react";

// Const assertions
const colors = ["primary", "secondary", "tertiary"] as const;
const sizes = ["small", "medium", "large"] as const;
const rounded = ["a", "b", "c"] as const;

// Union types with string literals
type TypeColors = typeof colors[number];
type TypeSizes = typeof sizes[number];
type TypeRounded = typeof rounded[number];

// Match de clases
export const RecordColors: Record<TypeColors, string> = {
  primary: "--primary",
  secondary: "--secondary",
  tertiary: "--tertiary",
};

export const RecordSizes: Record<TypeSizes, string> = {
  small: "--small",
  medium: "--medium",
  large: "--large",
};

export const RecordRounded: Record<TypeRounded, string> = {
  a: "--roundedA",
  b: "--roundedB",
  c: "--roundedC",
};

export interface InterfaceButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Inside element
   */
  children: ReactNode;
  /**
   * Button theme
   */
  color: TypeColors;
  /**
   * Button size
   */
  size: TypeSizes;
  /**
   * Button border-radius
   */
  round?: TypeRounded;
  /**
   * Button disabled
   */
  disabled: boolean;
  /**
   * Button type attribute
   */
  type: "button" | "submit" | "reset";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Custom classname
   */
  classNames?: string;
}
