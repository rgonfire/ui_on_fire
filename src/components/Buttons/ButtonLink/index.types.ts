/**
 * @description Type definitions ButtonLink
 */

import { AnchorHTMLAttributes } from "react";
import { InterfaceButtonCommonProps } from "../Button/index.types";

export interface InterfaceButtonLinkProps
  extends InterfaceButtonCommonProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
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
  link: string;
}
