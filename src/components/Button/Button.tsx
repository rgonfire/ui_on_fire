import React from "react";
import classnames from "classnames";
import {
  InterfaceButtonProps,
  RecordColors,
  RecordSizes,
  RecordRounded,
} from "./Button.d";

const Button = ({
  children,
  disabled = false,
  color = "primary",
  size = "medium",
  round = "a",
  classNames,
}: InterfaceButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={classnames(
        "btn",
        RecordColors[color],
        RecordSizes[size],
        RecordRounded[round],
        classNames
      )}
    >
      {children}
    </button>
  );
};

export default Button;
