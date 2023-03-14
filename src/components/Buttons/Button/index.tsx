import React from "react";
import classnames from "classnames";
import {
  InterfaceButtonProps,
  RecordColors,
  RecordHeightSizes,
  RecordWidthSizes,
  RecordRounded,
} from "./index.types";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  theme = "darkPrimary",
  height = "medium",
  width = "medium",
  round = "m",
  alt = "",
  text = "",
  iconLeft,
  iconRight,
  classNames,
  ...rest
}: InterfaceButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
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
    </button>
  );
};

export default Button;
