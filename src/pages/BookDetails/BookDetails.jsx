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

const BookDetails = () => {
  const params = useParams();

  const location = useLocation().pathname;

  const bookId = params.bookId;
  console.log("bookId", bookId);

  const adress = location.slice(7, location.length - 2).toLowerCase();
  console.log("category", adress);

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
          <h1>{bookDetails.title}</h1>
        </StyledBookDescription>
        <StyledBookDescription>
          Description:{" "}
          {bookDetails.description ||
            "Sorry, there is no description for this book, it will be added soon..."}
        </StyledBookDescription>
        <StyledBookDescription>
          Author: {bookDetails.author}
        </StyledBookDescription>
        <StyledBookDescription>
          Price: {bookDetails.price}$
        </StyledBookDescription>
        <StyledBookDescription>
          <Button>Buy Book</Button>
        </StyledBookDescription>
      </div>
    </Template>
  );
};

export default BookDetails;
