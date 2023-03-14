/**
 * @description Type definitions Button
 */
import { ButtonHTMLAttributes } from "react";
declare const themes: readonly ["darkPrimary", "darkSecondary", "darkTertiary", "lightPrimary", "lightSecondary", "lightTertiary"];
declare const widthSizes: readonly ["small", "medium", "large"];
declare const heightSizes: readonly ["small", "medium", "large"];
declare const rounded: readonly ["sm", "m", "lm"];
type TypeThemes = typeof themes[number];
type TypeWidthSizes = typeof widthSizes[number];
type TypeHeightSizes = typeof heightSizes[number];
type TypeRounded = typeof rounded[number];
export declare const RecordColors: Record<TypeThemes, string>;
export declare const RecordHeightSizes: Record<TypeHeightSizes, string>;
export declare const RecordWidthSizes: Record<TypeWidthSizes, string>;
export declare const RecordRounded: Record<TypeRounded, string>;
export interface InterfaceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Inside button text
     */
    text: string;
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
export {};
