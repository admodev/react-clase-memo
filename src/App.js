import React, { useState } from "react";

import DisplayFruitName from "./components/DisplayFruitName";

import "./App.css";

export default function App() {
  const fruits = ["pera", "manzana", "banana"];
  const [fruitName, setFruitName] = useState("");
  const [searchedFruit, setSearchedFruit] = useState(
    "Busca tu fruta preferida!"
  );
  const [count, setCount] = useState(0);

  const searchFruitName = () => {
    if (fruits.includes(fruitName)) {
      setSearchedFruit(fruitName);
    } else {
      setSearchedFruit("No se encontraron frutas...");
    }

    setCount(count + 1);
  };

  const showAllFruits = () => {
    return fruits.map((fruit, index) => {
      return (
        <span key={index} className="fruitName">
          {fruit}
        </span>
      );
    });
  };

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <div className="fruits">{showAllFruits()}</div>
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(event) => setFruitName(event.target.value)}
          value={fruitName}
        />
        <button onClick={searchFruitName}>Buscar</button>
      </div>
      <DisplayFruitName searchedFruitName={searchedFruit} />
    </div>
  );
}
