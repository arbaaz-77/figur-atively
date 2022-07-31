import { useContext } from "react";
import "./CartDropDown.scss";

import { CartContext } from "../../contexts/cartContext";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
