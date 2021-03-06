import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchBooks } from "../../redux/books/booksActions";

import SingleCard from "./SingleCard/SingleCard";
import CarouselSlider from "../../UI/Carousel/CarouselSlider";
import Template from "../../UI/Template/Template";

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

const StyledContentDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 5px 10px;
  padding: 0px;
`;

const Cards = ({ name, category, withCarousel }) => {
  const booksData = useSelector((state) => state.booksStore.books[category]);
  console.log("booksDataaa", booksData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(category));
  }, [dispatch, category]);

  return (
    <Template>
      <span>
        <StyledHeader>{name}</StyledHeader>
        <StyledHr />
      </span>
      {withCarousel ? (
        <CarouselSlider itemsToShow={4} itemsToScroll={4}>
          {booksData &&
            booksData.map((singleBookData, index) => (
              <Link
                to={`/books/${category}/${index}`}
                key={singleBookData.primary_isbn10}
              >
                {/* {console.log("singlebookIndex", index)} */}
                <SingleCard
                  key={singleBookData.primary_isbn10}
                  image={singleBookData.book_image}
                  title={singleBookData.title}
                  description={singleBookData.description}
                  price={singleBookData.price}
                  author={singleBookData.author}
                />
              </Link>
            ))}
        </CarouselSlider>
      ) : (
        <StyledContentDiv>
          {booksData &&
            booksData.map((singleBookData) => (
              <Link to="/bookdetails">
                <SingleCard
                  key={singleBookData.primary_isbn10}
                  image={singleBookData.book_image}
                  title={singleBookData.title}
                  description={singleBookData.description}
                  price={singleBookData.price}
                  author={singleBookData.author}
                />
              </Link>
            ))}
        </StyledContentDiv>
      )}
    </Template>
  );
};

export default Cards;
