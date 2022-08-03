import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoryContainer } from "./DirectoryStyles";

const categories = [
  {
    id: 1,
    title: "Superheroes",
    imageUrl: "images/heroes.png",
    route: "shop/heroes",
  },
  {
    id: 2,
    title: "Villains",
    imageUrl: "images/villains.png",
    route: "shop/villains",
  },
  {
    id: 3,
    title: "All",
    imageUrl:
      "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    route: "shop",
  },
  {
    id: 4,
    title: "DC",
    imageUrl: "images/DC.svg",
    route: "shop/dc",
  },
  {
    id: 5,
    title: "Marvel",
    imageUrl: "images/marvel.svg",
    route: "shop/marvel",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
