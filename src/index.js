import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { ProductsProvider } from "./contexts/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
