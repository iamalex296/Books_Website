import React from "react";

import SingleCard from "./SingleCard";
import CarouselSlider from "../../UI/Carousel/CarouselSlider";
import Template from "../../UI/Template/Template";

import styled from "styled-components";

const StyledHeader = styled.h2`
  color: #ffffff;
  margin: 10px 0px;
  text-align: left;
`;

const StyledHr = styled.hr`
  margin: 0;
  min-width: 200px;
  margin-bottom: 20px;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  border: 0;

  :after {
    content: "";
    display: block;
    border-bottom: 1px solid red;
    max-width: 40%;
  }
`;

const Cards = ({ name }) => {
  return (
    <Template>
      <span>
        <StyledHeader>{name}</StyledHeader>
        <StyledHr />
      </span>
      <CarouselSlider itemsToShow={4} itemsToScroll={4}>
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
