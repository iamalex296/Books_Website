import React from "react";

import { StyledListLink } from "../../../UI/Links/StyledLinks";
import Button from "../../../UI/Button/Button";

import classes from "./SingleCard.module.css";

const SingleCard = ({ title, description, author, price, image, category }) => {
  return (
    <div className={classes.box}>
      <div className={classes["box-img"]}>
        <img src={image} alt="1984" />
      </div>

      <div className={classes.content}>
        <h2>{title}</h2>
        <p className={classes["description-text"]}>
          <span>Description:</span> {description}
        </p>
        <p className={classes["book-categories"]}>
          <span>Category:</span>
          {category}
        </p>
        <p>
          <span>Author:</span>
          {author}
        </p>
        <p>
          <span>Price:</span> {price}$
        </p>
      </div>

      <div className={classes.button}>
        <StyledListLink to="/">
          <Button size="small">Add To Cart</Button>
        </StyledListLink>
      </div>
    </div>
  );
};

export default SingleCard;
