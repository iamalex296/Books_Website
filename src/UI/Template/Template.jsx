import React from "react";

import classes from "./Template.module.css";

const Template = ({ children, className, inlineStyles }) => {
  return (
    <div className={`${classes["template-outside-container"]} ${className}`}>
      <div
        className={`${classes["template-inner-container"]} ${className}`}
        style={inlineStyles}
      >
        {children}
      </div>
    </div>
  );
};

export default Template;
