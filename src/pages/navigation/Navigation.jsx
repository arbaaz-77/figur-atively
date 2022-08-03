import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  Logo,
} from "./NavigationStyles";

import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src="/images/logo.png" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/shop">CONTACT</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
