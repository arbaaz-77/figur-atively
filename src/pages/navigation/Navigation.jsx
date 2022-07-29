import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/cartContext";

import "./Navigation.scss";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src="/images/logo.png" alt="" className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/shop">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
