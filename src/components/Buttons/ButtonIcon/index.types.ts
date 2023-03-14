/**
 * @description Type definitions ButtonLink
 */

import { InterfaceButtonCommonProps } from "../Button/index.types";

export interface InterfaceButtonIconProps extends InterfaceButtonCommonProps {
  /**
   * Src of the icon
   */
  iconSrc?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
