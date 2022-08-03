import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDownStyles";

import { CartContext } from "../../contexts/cartContext";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>Go To Checkout</Button>
      </Link>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
