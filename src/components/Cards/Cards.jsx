import React from "react";

import SingleCard from "./SingleCard/SingleCard";
import CarouselSlider from "../../UI/Carousel/CarouselSlider";
import Template from "../../UI/Template/Template";

import Book1984 from "../../assets/z13bnbq2dwg51.png";
import CrimeAndPunishment from "../../assets/crime_and_punishment_raskolnikov_maria_ivanova_mariaivart.jpg";

import styled from "styled-components";

const StyledHeader = styled.a`
  font-size: 24px;
  margin: 10px 0px;
  text-align: left;
`;

const StyledHr = styled.hr`
  margin: 0;
  min-width: 200px;
  margin-bottom: 20px;
  width: 100%;
  height: 1px;
  background-color: #b4b4b4;
  border: 0;

  :after {
    content: "";
    display: block;
    border-bottom: 1px solid #cb0e4e;
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
        <SingleCard
          image={Book1984}
          category="detective, romance, fiction, science-fiction, comedy, horror"
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={CrimeAndPunishment}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={Book1984}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={CrimeAndPunishment}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={Book1984}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={Book1984}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={CrimeAndPunishment}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
        <SingleCard
          image={Book1984}
          title="1984"
          description="1984 is a dystopian social science fiction novel by
          English novelist George Orwell."
          price="20.50"
          author="George orwell"
        />
      </CarouselSlider>
    </Template>
  );
};

export default Cards;
