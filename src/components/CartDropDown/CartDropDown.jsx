import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDownStyles";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

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
