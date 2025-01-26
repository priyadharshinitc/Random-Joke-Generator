import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchJoke } from "./jokeSlice";

const App = () => {
  const [category, setCategory] = useState("");
  const {joke, error} = useSelector(function(state) {
    return state.joke;
  });

  const dispatch = useDispatch();

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  }

  const handleClick = () => {
    dispatch(fetchJoke(category));
  }

  return (
    <main className="container">
      <h1 className="header">Random Joke Generator</h1>
      <input className="inputBox" onChange={handleChangeCategory} type="text" placeholder="Enter category..." />
      <button onClick={handleClick} className="getBtn">Get {category ? category : "random"} joke</button>
      <h2>{error ? error : joke}</h2>
    </main>
  );
};

export default App;
