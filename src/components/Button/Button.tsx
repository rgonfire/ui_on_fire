import React from "react";
import classnames from "classnames";
import {
  InterfaceButtonProps,
  RecordColors,
  RecordSizes,
  RecordRounded,
} from "./Button.types";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  theme = "darkPrimary",
  size = "medium",
  round = "m",
  alt = "",
  text = "",
  iconLeft,
  iconRight,
  classNames,
}: InterfaceButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classnames(
        "rg-btn",
        RecordColors[theme],
        RecordSizes[size],
        RecordRounded[round],
        classNames
      )}
    >
      {iconLeft && <img className="w-3" src={iconLeft} alt={alt} />}
      <span className={`"bg-${theme}"`}>{text}</span>
      {iconRight && <img className="w-3" src={iconRight} alt={alt} />}
    </button>
  );
};

export default Button;
