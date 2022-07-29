import React from "react";
import Button from "../Button/Button";

import "./ProductCard.scss";

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="product-card-container">
      <img src={image} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
