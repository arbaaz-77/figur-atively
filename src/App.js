const App = () => {
  const categories = [
    {
      id: 1,
      title: "Superheroes",
    },
    {
      id: 2,
      title: "Villains",
    },
    {
      id: 3,
      title: "Special Offers",
    },
    {
      id: 4,
      title: "DC",
    },
    {
      id: 5,
      title: "Marvel",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
