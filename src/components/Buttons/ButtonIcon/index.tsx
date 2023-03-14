import React from "react";
import classnames from "classnames";
import { InterfaceButtonIconProps } from "./index.types";

import {
  RecordColors,
  RecordHeightSizes,
  RecordWidthSizes,
  RecordRounded,
} from "../Button/index.types";

const ButtonIcon = ({
  onClick,
  alt = "",
  iconSrc = "https://rgonfire.com/assets/icons/svgs/star.svg",
  theme = "darkPrimary",
  height = "medium",
  width = "medium",
  round = "m",
  classNames,
  ...rest
}: InterfaceButtonIconProps): JSX.Element => {
  return (
    <img
      src={iconSrc}
      alt={alt}
      onClick={onClick}
      className={classnames(
        "rg-btn",
        RecordColors[theme],
        RecordHeightSizes[height],
        RecordWidthSizes[width],
        RecordRounded[round],
        classNames
      )}
      {...rest}
    />
  );
};

export default ButtonIcon;
