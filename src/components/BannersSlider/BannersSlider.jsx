import React from "react";

import CarouselSlider from "../../UI/Carousel/CarouselSlider";

const BannersSlider = (toggleDarkMode) => {
  return (
    <CarouselSlider
      backgroundColor="#161617"
      autoPlay={true}
      toggleDarkMode={toggleDarkMode}
    >
      <img
        src="https://www.bookshop.ge/content/uploads/slider/slider_60f566c675464.jpg"
        alt="img"
      />
      <img
        src="https://www.bookshop.ge/content/uploads/slider/slider_5f718889505dd.jpg"
        alt="img"
      />
      <img
        src="https://www.bookshop.ge/content/uploads/slider/slider_60f566c675464.jpg"
        alt="img"
      />
      <img
        src="https://www.bookshop.ge/content/uploads/slider/slider_60f566c675464.jpg"
        alt="img"
      />
      <img
        src="https://www.bookshop.ge/content/uploads/slider/slider_5f718889505dd.jpg"
        alt="img"
      />
      <img
        src="https://www.bookshop.ge/content/uploads/slider/slider_60f566c675464.jpg"
        alt="img"
      />
    </CarouselSlider>
  );
};

export default BannersSlider;
