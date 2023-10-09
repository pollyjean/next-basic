"use client";
import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Hydration Counter : {counter}</h1>
      <button onClick={onClick}>Plus</button>
    </div>
  );
};

export default Home;
