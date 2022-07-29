import React, { useContext } from "react";
import "./CartIcon.scss";

import { CartContext } from "../../contexts/cartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src="/images/shopping-bag.svg" alt="" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
