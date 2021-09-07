import React from "react";

import BannersSlider from "../../components/BannersSlider/BannersSlider";
import Cards from "../../components/Cards/Cards";

const Homepage = () => {
  return (
    <div>
      <BannersSlider />
      <Cards name="New Books" />
      <Cards name="Bestsellers" />
      <Cards name="Fiction" />
    </div>
  );
};

export default Homepage;
