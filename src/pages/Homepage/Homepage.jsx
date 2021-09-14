import React from "react";

import BannersSlider from "../../components/BannersSlider/BannersSlider";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";

import BannerImage from "../../assets/Banner.jpg";

const Homepage = () => {
  return (
    <div>
      <BannersSlider />
      <Cards name="Fiction" category="hardcover-fiction" withCarousel={true} />
      <Cards name="Business" category="business-books" withCarousel={true} />
      <Banner bannerImage={BannerImage} />
      <Cards name="Animals" category="animals" />
    </div>
  );
};

export default Homepage;
