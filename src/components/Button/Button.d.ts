/**
 * @description Type definitions Button
 */

import { ReactNode, ButtonHTMLAttributes } from "react";

// Const assertions
const colors = ["primary", "secondary", "tertiary"] as const;
const sizes = ["small", "medium", "large"] as const;

// Union types with string literals
type TypeColors = typeof colors[number];
type TypeSizes = typeof sizes[number];

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
   * Custom classname
   */
  classNames?: string;
}
