import React from "react";
import Directory from "../../components/Directory/Directory";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Superheroes",
      imageUrl: "images/heroes.png",
    },
    {
      id: 2,
      title: "Villains",
      imageUrl: "images/villains.png",
    },
    {
      id: 3,
      title: "All",
      imageUrl:
        "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 4,
      title: "DC",
      imageUrl: "images/DC.svg",
    },
    {
      id: 5,
      title: "Marvel",
      imageUrl: "images/marvel.svg",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
