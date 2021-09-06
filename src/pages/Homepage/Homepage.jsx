import React from "react";

import BannersSlider from "../../components/BannersSlider/BannersSlider";
import Cards from "../../components/Cards/Cards";

const Homepage = ({ toggleDarkMode }) => {
  return (
    <div>
      <BannersSlider toggleDarkMode={toggleDarkMode} />
      <Cards name="New Books" toggleDarkMode={toggleDarkMode} />
      <Cards name="Bestsellers" toggleDarkMode={toggleDarkMode} />
      <Cards name="Fiction" toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Homepage;
