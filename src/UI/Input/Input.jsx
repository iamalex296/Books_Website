import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "red",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#b4b4b4",
        opacity: "0.5",
      },
      "&:hover fieldset": {
        borderColor: "#344B9F",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#344B9F",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Input = ({ children, placeHolder, variant, id, type, size }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        label={placeHolder}
        variant={variant || "outlined"}
        id={id}
        type={type}
        size={size}
      />
      {children && children}
    </form>
  );
};

export default Input;
