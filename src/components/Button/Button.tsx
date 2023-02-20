import React from "react";
import classnames from "classnames";
import { InterfaceButtonProps, RecordColors, RecordSizes } from "./Button.d";

const Button = ({
  children,
  color = "primary",
  size = "medium",
  classNames,
}: InterfaceButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={classnames(
        "btn",
        RecordColors[color],
        RecordSizes[size],
        classNames
      )}
    >
      {children}
    </button>
  );
};

export default Button;
