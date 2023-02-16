/**
 * @description Type definitions Button
 */

import { ReactNode, ButtonHTMLAttributes } from "react";

// Const assertions
const colors = ["primary", "secondary"] as const;
const sizes = ["small", "regular"] as const;

// Union types with string literals
type TypeColors = typeof colors[number];
type TypeSizes = typeof sizes[number];

// Match de clases
export const RecordColors: Record<TypeColors, string> = {
  primary: "--primary",
  secondary: "--secondary",
};

export const RecordSizes: Record<TypeSizes, string> = {
  small: "--small",
  regular: "--regular",
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
   * Custom classname
   */
  classNames?: string;
  /**
   * Button size
   */
  size: TypeSizes;
}
