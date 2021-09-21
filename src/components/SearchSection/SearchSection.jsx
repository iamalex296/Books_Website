import React from "react";

import { Link } from "react-router-dom";

import Template from "../../UI/Template/Template";
import Search from "./Search";

const SearchSection = () => {
  return (
    <Template>
      <Link to="/home">
        <img
          style={{ height: "100px", width: "170px" }}
          src={"https://www.bookshop.ge/images/logo.svg"}
          alt="logo"
        />
      </Link>
      <Search />
    </Template>
  );
};

export default SearchSection;
