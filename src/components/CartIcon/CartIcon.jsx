import React, { useContext } from "react";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIconStyles";

import { CartContext } from "../../contexts/cartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src="/images/shopping-bag.svg" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
