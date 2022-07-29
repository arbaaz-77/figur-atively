import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { ProductsProvider } from "./contexts/productsContext";
import { CartProvider } from "./contexts/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
