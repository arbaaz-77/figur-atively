import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import {
  CheckoutItemContainer,
  ImageContainer,
  Span,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./CheckoutItemStyles";

const CheckoutItem = ({ item }) => {
  const { name, price, quantity, image } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(item);

  const removeItemHandler = () => removeItemFromCart(item);

  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <Span>{name}</Span>
      <Quantity>
        <Arrow>
          <span onClick={removeItemHandler}>&#10094;</span>
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow>
          <span onClick={addItemHandler}>&#10095;</span>
        </Arrow>
      </Quantity>
      <Span>{price}</Span>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
