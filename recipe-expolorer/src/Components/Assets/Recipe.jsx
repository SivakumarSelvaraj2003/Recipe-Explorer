import React from "react";
import "./Recipe.css";


const recipes = [
  {
    title: "Paneer Butter Masala",
    duration: "1h 12m",
    rating: 4.5,
    description:
      "Paneer Butter Masala, also known as butter paneer, is a rich & creamy curry made with paneer.",
    
  },
  {
    title: "Carrot Halwa",
    duration: "45m",
    rating: 4.6,
    description:
      "Carrot halwa is a carrot-based sweet dessert pudding made by placing grated carrot in milk.",
    
  },
  {
    title: "Tandoori Chicken",
    duration: "2h 0m",
    rating: 4.7,
    description:
      "Tandoori chicken is a dish made from chicken marinated in yogurt and spices.",
    
  },
  {
    title: "Channa Masala",
    duration: "35m",
    rating: 4.8,
    description:
      "Channa masala is North Indian curried dish made with white chickpeas, onions.",
  
  },
  {
    title: "Chicken Biryani",
    duration: "1h 12m",
    rating: 4.9,
    description:
      "Biryani is a mixed rice dish mainly popular in South Asia. It is made with meat and rice.",
    
  },
];

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Food Recipe</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search recipe" />
          <FaSearch />
        </div>
      </header>

      {/* Recipe of the Day */}
      <section className="recipe-of-the-day">
        <h2>Recipe of the day</h2>
        <div className="highlight">
          <div className="highlight-text">
            <h3>Vegetable Sizzler</h3>
            <p>
              Sizzlers are a favorite with Indians, as they come with sizzler
              plates, thick steaks, rice, stir-fried vegetables, French fries,
              and tasty barbecue sauce.
            </p>
            <button className="btn">Get Recipe</button>
          </div>
          <img
            src="sizzler.jpg"
            alt="Vegetable Sizzler"
            className="highlight-image"
          />
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="popular-recipes">
        <h2>Popular Recipes</h2>
        <div className="recipe-list">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-info">
                <h3>{recipe.title}</h3>
                <p>Duration: {recipe.duration}</p>
                <p>Rating: {recipe.rating}</p>
              </div>
              <button className="btn">Get Recipe</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

