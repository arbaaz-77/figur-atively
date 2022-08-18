import { Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

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
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src="/images/logo.png" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
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
