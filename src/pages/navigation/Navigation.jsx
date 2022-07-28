import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src="/images/crown.svg" alt="" className="logo" />
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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
