import { useContext } from "react";
import Button, { BUTTON_CLASSES } from "../Button/Button";

import { CartContext } from "../../contexts/cartContext";

import { ProductCardContainer, Footer, Name, Price } from "./ProductCardStyles";

const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={image} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_CLASSES.inverted} onClick={addProductToCart}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
