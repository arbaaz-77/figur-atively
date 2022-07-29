import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductsContext } from "../../contexts/productsContext";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(({ id, name, image, price }) => (
        <ProductCard key={id} name={name} image={image} price={price} />
      ))}
    </div>
  );
};

export default Shop;
