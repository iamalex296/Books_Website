import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/books/booksActions";

import BannersSlider from "../../components/BannersSlider/BannersSlider";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";

import BannerImage from "../../assets/Banner.jpg";

const Homepage = () => {
  const booksData = useSelector((state) => state.books.books);
  // console.log("booksdata", booksData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks("animals"));
  }, [dispatch]);

  return (
    <div>
      <BannersSlider />
      <Cards name="New Books" booksData={booksData} />
      <Cards name="Bestsellers" />
      <Banner bannerImage={BannerImage} />
      <Cards name="Fiction" />
    </div>
  );
};

export default Homepage;
