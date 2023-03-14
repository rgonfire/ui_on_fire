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
const widthSizes = ["small", "medium", "large"] as const;
const heightSizes = ["small", "medium", "large"] as const;
const rounded = ["sm", "m", "lm"] as const;

// Union types with string literals
type TypeThemes = typeof themes[number];
type TypeWidthSizes = typeof widthSizes[number];
type TypeHeightSizes = typeof heightSizes[number];
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

export const RecordHeightSizes: Record<TypeHeightSizes, string> = {
  small: "--h-small",
  medium: "--h-medium",
  large: "--h-large",
};

export const RecordWidthSizes: Record<TypeWidthSizes, string> = {
  small: "--w-small",
  medium: "--w-medium",
  large: "--w-large",
};

export const RecordRounded: Record<TypeRounded, string> = {
  sm: "--roundedSm",
  m: "--roundedM",
  lm: "--roundedLm",
};

export interface InterfaceButtonCommonProps {
  /**
   * Button theme
   */
  theme: TypeThemes;
  /**
   * Button width size
   */
  width: TypeWidthSizes;
  /**
   * Button height size
   */
  height: TypeHeightSizes;
  /**
   * Inside button text
   */
  text: string;
  /**
   * Button border-radius style
   */
  round?: TypeRounded;
  /**
   * Alt for icon of the button
   */
  alt?: string;
  /**
   * Custom classname
   */
  classNames?: string;
}

export interface InterfaceButtonProps
  extends InterfaceButtonCommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Src of the icon left of the button
   */
  iconLeft?: string;
  /**
   * Src of the icon right of the button
   */
  iconRight?: string;

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
}
