import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

// import DirectionsIcon from "@material-ui/icons/Directions";

import styled from "styled-components";

const StyledButton = styled.button`
  height: 100%;
  background-color: #3f51b5;
  padding: 0px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #dfdfdf;
  cursor: pointer;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  transition-duration: 0.3s;

  :hover {
    background-color: #cb0e4e;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
    display: "flex",
    alignItems: "center",
    width: 500,
    borderRadius: "6px",
    background: "rgba(240, 240, 240, 1)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  // divider: {
  //   height: 28,
  //   margin: 4,
  // },
}));

const InputWithButton = ({
  placeholder,
  buttonName,
  icon,
  ariaLabel,
  type,
  width,
}) => {
  const classes = useStyles();

  return (
    <Paper
      style={{ width: width || 500 }}
      component="form"
      className={classes.root}
    >
      <InputBase
        className={classes.input}
        placeholder={placeholder || "enter something"}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <StyledButton>
        <IconButton
          type={type || "submit"}
          className={classes.iconButton}
          aria-label={ariaLabel || "aria-label"}
        >
          {icon && icon}
        </IconButton>
        {buttonName && buttonName}
      </StyledButton>
    </Paper>
  );
};

export default InputWithButton;
