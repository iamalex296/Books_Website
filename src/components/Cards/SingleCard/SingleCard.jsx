import React from "react";

import { StyledListLink } from "../../../UI/Links/StyledLinks";
import Button from "../../../UI/Button/Button";

import classes from "./SingleCard.module.css";

const SingleCard = ({ title, description, author, price, image }) => {
  return (
    <div className={classes.box}>
      <div className={classes["box-img"]}>
        <img src={image} alt={`${image}`} />
      </div>

      <div className={classes.content}>
        <h3>{title}</h3>
        <p className={classes["description-text"]}>
          <span>Description:</span> {description}
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
