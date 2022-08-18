import React from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) =>
    state.categories.categories.reduce((acc, category) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;

      return acc;
    }, {})
  );

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
