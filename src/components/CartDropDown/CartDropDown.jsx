import { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/checkout">
        <Button>Go To Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
