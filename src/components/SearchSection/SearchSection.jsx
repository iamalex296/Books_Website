import React from "react";

import Template from "../../UI/Template/Template";
import Search from "./Search";

const SearchSection = ({ toggleDarkMode }) => {
  return (
    <Template toggleDarkMode={toggleDarkMode}>
      <img
        style={{ height: "100px", width: "170px" }}
        src={"https://www.bookshop.ge/images/logo.svg"}
        alt="logo"
      />
      <Search />
    </Template>
  );
};

export default SearchSection;
