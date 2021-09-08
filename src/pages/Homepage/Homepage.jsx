import React from "react";

import BannersSlider from "../../components/BannersSlider/BannersSlider";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";

import BannerImage from "../../assets/Banner.jpg";

const Homepage = () => {
  return (
    <div>
      <BannersSlider />
      <Cards name="New Books" />
      <Cards name="Bestsellers" />
      <Banner bannerImage={BannerImage} />
      <Cards name="Fiction" />
    </div>
  );
};

export default Homepage;
