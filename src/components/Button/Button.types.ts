/**
 * @description Type definitions Button
 */

import { ButtonHTMLAttributes } from "react";

// Const assertions
const themes = [
  "darkPrimary",
  "darkSecondary",
  "darkTertiary",
  "lightPrimary",
  "lightSecondary",
  "lightTertiary",
] as const;
const sizes = ["small", "medium", "large"] as const;
const rounded = ["sm", "m", "lm"] as const;

// Union types with string literals
type TypeThemes = typeof themes[number];
type TypeSizes = typeof sizes[number];
type TypeRounded = typeof rounded[number];

// Match de clases
export const RecordColors: Record<TypeThemes, string> = {
  darkPrimary: "--darkPrimary",
  darkSecondary: "--darkSecondary",
  darkTertiary: "--darkTertiary",
  lightPrimary: "--lightPrimary",
  lightSecondary: "--lightSecondary",
  lightTertiary: "--lightTertiary",
};

export const RecordSizes: Record<TypeSizes, string> = {
  small: "--small",
  medium: "--medium",
  large: "--large",
};

export const RecordRounded: Record<TypeRounded, string> = {
  sm: "--roundedSm",
  m: "--roundedM",
  lm: "--roundedLm",
};

export interface InterfaceButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Inside button text
   */
  text: string;
  /**
   * Button theme
   */
  theme: TypeThemes;
  /**
   * Button size
   */
  size: TypeSizes;
  /**
   * Button border-radius style
   */
  round?: TypeRounded;
  /**
   * Src of the icon left of the button
   */
  iconLeft?: string;
  /**
   * Src of the icon right of the button
   */
  iconRight?: string;
  /**
   * Alt for icon of the button
   */
  alt?: string;
  /**
   * Button disabled
   */
  disabled?: boolean;
  /**
   * Button type attribute
   */
  type?: "button" | "submit" | "reset";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Custom classname
   */
  classNames?: string;
}
