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
        backgroundColor: `${backgroundColor || "#27292D"}`,
      }}
      breakPoints={breakPoints}
      itemsToShow={itemsToShow || 1}
      disableArrowsOnEnd={true}
      enableAutoPlay={autoPlay || false}
      autoPlaySpeed={5000}
      transitionMs={1500}
      dots={null}
      // enableTilt={false}
      // itemPadding={[10, 50]}
      itemsToScroll={itemsToScroll || 1}
      // showArrows={false}
    >
      {children}
    </Carousel>
  );
};

export default CarouselSlider;
