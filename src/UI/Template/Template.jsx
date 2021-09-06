import React from "react";

import classes from "./Template.module.css";

const Template = ({ children, className, inlineStyles, toggleDarkMode }) => {
  return (
    <div
      className={`${
        toggleDarkMode
          ? classes["template-dark-outside-container"]
          : classes["template-light-outside-container"]
      } ${className}`}
    >
      <div
        className={`${
          toggleDarkMode
            ? classes["template-dark-inner-container"]
            : classes["template-light-inner-container"]
        } ${className}`}
        style={inlineStyles}
      >
        {children}
      </div>
    </div>
  );
};

export default Template;
