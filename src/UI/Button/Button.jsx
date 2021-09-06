import React from "react";

import Button from "@material-ui/core/Button";

const SingleButton = ({
  variant,
  color,
  disabled,
  type,
  onClick,
  children,
  size,
  startIcon,
  endIcon,
  style,
}) => {
  return (
    <Button
      style={style}
      variant={variant || "contained"}
      color={color || "primary"}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
      size={size || "medium"}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </Button>
  );
};

export default SingleButton;
