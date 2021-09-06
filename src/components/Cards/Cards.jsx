import React from "react";

import SingleCard from "./SingleCard";
import CarouselSlider from "../../UI/Carousel/CarouselSlider";
import Template from "../../UI/Template/Template";

import styled from "styled-components";

const StyledHeader = styled.h2`
  color: ${(props) => (props.toggleDarkMode ? "#ffffff" : "#707070")};
  margin: 10px 0px;
  text-align: left;
`;

const StyledHr = styled.hr`
  margin: 0;
  min-width: 200px;
  margin-bottom: 20px;
  width: 100%;
  height: 1px;
  background-color: #707070;
  border: 0;

  :after {
    content: "";
    display: block;
    border-bottom: 1px solid red;
    max-width: 40%;
  }
`;

const Cards = ({ name, toggleDarkMode }) => {
  return (
    <Template toggleDarkMode={toggleDarkMode}>
      <span>
        <StyledHeader toggleDarkMode={toggleDarkMode}>{name}</StyledHeader>
        <StyledHr />
      </span>
      <CarouselSlider
        toggleDarkMode={toggleDarkMode}
        itemsToShow={4}
        itemsToScroll={4}
      >
        <SingleCard number="1" />
        <SingleCard number="2" />
        <SingleCard number="3" />
        <SingleCard number="4" />
        <SingleCard number="5" />
        <SingleCard number="6" />
        <SingleCard number="7" />
        <SingleCard number="8" />
        <SingleCard number="1" />
        <SingleCard number="2" />
        <SingleCard number="3" />
        <SingleCard number="4" />
        <SingleCard number="5" />
        <SingleCard number="6" />
        <SingleCard number="7" />
        <SingleCard number="8" />
      </CarouselSlider>
    </Template>
  );
};

export default Cards;
