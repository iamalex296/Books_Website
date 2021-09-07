import React from "react";
import InputWithButton from "../../UI/Input/InputWithButton";

import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <InputWithButton
      buttonName="Search"
      placeholder="Find your Product"
      type="submit"
      icon={<SearchIcon />}
    />
  );
};

export default Search;
