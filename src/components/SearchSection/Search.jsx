import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../../UI/Button/Button";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "0",
      width: "50ch",
      height: theme.spacing(7),
    },
  },

  textField: {
    backgroundColor: "#B4B4B4",
    borderRadius: "5px",
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        id="outlined-search"
        label="Find your Product"
        type="search"
        variant="outlined"
      />
      <Button
        style={{
          marginLeft: "-10px",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          width: "130px",
        }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
