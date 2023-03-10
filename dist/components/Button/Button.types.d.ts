/**
 * @description Type definitions Button
 */
import { ReactNode, ButtonHTMLAttributes } from "react";
declare const colors: readonly ["primary", "secondary", "tertiary"];
declare const sizes: readonly ["small", "medium", "large"];
declare const rounded: readonly ["a", "b", "c"];
type TypeColors = typeof colors[number];
type TypeSizes = typeof sizes[number];
type TypeRounded = typeof rounded[number];
export declare const RecordColors: Record<TypeColors, string>;
export declare const RecordSizes: Record<TypeSizes, string>;
export declare const RecordRounded: Record<TypeRounded, string>;
export interface InterfaceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
