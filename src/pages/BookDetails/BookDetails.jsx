import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBooks } from "../../redux/books/booksActions";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Template from "../../UI/Template/Template";

const StyledBookCover = styled.img`
  height: 350px;
  min-width: 230px;
  max-width: 230px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 1) 10px 10px 15px;
  margin-right: 20px;
`;

const StyledBookDescription = styled.div`
  margin: 20px 0px 20px 20px;
`;

const StyledBookTitle = styled.h1`
  color: #cb0e4e;
`;

const StyledSpan = styled.span`
  color: #2e99fb;
  margin-right: 5px;
`;

const BookDetails = () => {
  const params = useParams();

  const location = useLocation().pathname;

  const bookId = params.bookId;
  // console.log("bookId", bookId);

  const adress = location.slice(7, location.length - 2).toLowerCase();
  // console.log("category", adress);

  const bookDetails = useSelector(
    (state) => state.booksStore.books[adress][bookId]
  );
  console.log("booksdetails", bookDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(adress));
  }, [dispatch, adress]);

  return (
    <Template inlineStyles={{ flexWrap: "nowrap" }}>
      <StyledBookCover src={bookDetails.book_image} />
      <div>
        <StyledBookDescription>
          <StyledBookTitle>{bookDetails.title}</StyledBookTitle>
        </StyledBookDescription>
        <StyledBookDescription>
          <StyledSpan>Description:</StyledSpan>
          {bookDetails.description ||
            "Sorry, there is no description for this book, it will be added soon..."}
        </StyledBookDescription>
        <StyledBookDescription>
          <StyledSpan>Author:</StyledSpan>
          {bookDetails.author}
        </StyledBookDescription>
        <StyledBookDescription>
          <StyledSpan>Price:</StyledSpan>
          {bookDetails.price}$
        </StyledBookDescription>
        <StyledBookDescription>
          <Button>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={bookDetails.buy_links[4].url}
              target="_blank"
              rel="noreferrer"
            >
              Buy Book
            </a>
          </Button>
        </StyledBookDescription>
      </div>
    </Template>
  );
};

export default BookDetails;
