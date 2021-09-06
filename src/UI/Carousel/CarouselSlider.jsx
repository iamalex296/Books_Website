import React from "react";

import Carousel from "react-elastic-carousel";
import "./CarouselSlider.css";

const CarouselSlider = ({
  children,
  height,
  itemsToShow,
  itemsToScroll,
  backgroundColor,
  autoPlay,
  toggleDarkMode,
}) => {
  const breakPoints = [
    { width: 500, itemsShow: 1 },
    { width: 768, itemsShow: 2 },
    { width: 1200, itemsShow: 3 },
    { width: 1500, itemsShow: 4 },
  ];

  return (
    <Carousel
      style={{
        height: `${height || "350px"}`,
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: `${
          !toggleDarkMode && backgroundColor
            ? "#ffffff"
            : toggleDarkMode
            ? "#27292D"
            : "#ffffff"
        }`,
      }}
      breakPoints={breakPoints}
      itemsToShow={itemsToShow || 1}
      disableArrowsOnEnd={true}
      enableAutoPlay={autoPlay || false}
      autoPlaySpeed={5000}
      transitionMs={1500}
      dots={null}
      // enableTilt={false}
      // itemPadding={[30, 50]}
      itemsToScroll={itemsToScroll || 1}
      // showArrows={false}
    >
      {children}
    </Carousel>
  );
};

export default CarouselSlider;
