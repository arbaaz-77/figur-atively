import Directory from "./components/Directory/Directory";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Superheroes",
      imageUrl: "images/heroes.jpg",
    },
    {
      id: 2,
      title: "Villains",
      imageUrl: "images/villains.jpg",
    },
    {
      id: 3,
      title: "Special Offers",
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

export default App;
