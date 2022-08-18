import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

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

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));

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
      <Span>{quantity * price}</Span>

      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
