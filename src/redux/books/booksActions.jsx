import axios from "axios";

import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from "./booksActionTypes";

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccess = ({ books, category }) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: {
      books,
      category,
    },
  };
};

export const fetchBooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const fetchBooks = (category) => {
  // console.log("category", category);
  return function (dispatch) {
    dispatch(fetchBooksRequest());
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const books = response.data.results.books;
        dispatch(fetchBooksSuccess({ books, category }));
        // console.log("books", books);
        // console.log("category", category);
      })
      .catch((error) => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};
