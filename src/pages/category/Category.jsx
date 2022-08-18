import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";

import { CategoryContainer, CategoryTitle } from "./CategoryStyles";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector((state) =>
    state.categories.categories.reduce((acc, category) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;

      return acc;
    }, {})
  );
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
