import React from "react";
import classnames from "classnames";
import { InterfaceButtonLinkProps } from "./index.types";

import {
  RecordColors,
  RecordHeightSizes,
  RecordWidthSizes,
  RecordRounded,
} from "../Button/index.types";

const ButtonLink = ({
  theme = "darkPrimary",
  height = "medium",
  width = "medium",
  round = "m",
  alt = "",
  text = "",
  iconLeft,
  iconRight,
  classNames,
  link = "",
  ...rest
}: InterfaceButtonLinkProps): JSX.Element => {
  return (
    <a
      href={link}
      className={classnames(
        "rg-btn",
        RecordColors[theme],
        RecordHeightSizes[height],
        RecordWidthSizes[width],
        RecordRounded[round],
        classNames
      )}
      {...rest}
    >
      {iconLeft && <img className="w-3" src={iconLeft} alt={alt} />}
      <span className={`"bg-${theme}"`}>{text}</span>
      {iconRight && <img className="w-3" src={iconRight} alt={alt} />}
    </a>
  );
};

export default ButtonLink;
