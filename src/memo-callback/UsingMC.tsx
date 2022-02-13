import React, { useContext, useState } from "react";
import LowCompo from "./LowCompo";
import { UserContext } from "../contextAPI/Store";

const UsingMC = () => {
  const context = useContext(UserContext);
  console.log(context);
  const [movie, setMovie] = useState("");
  const [color, setColor] = useState("");
  const onMovieHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(e.target.value);
  };
  const onColorHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <LowCompo color={color} movie={movie} />
      <input value={color} onChange={onColorHandle} placeholder="color" />
      <input value={movie} onChange={onMovieHandle} placeholder="movie" />
    </div>
  );
};

export default UsingMC;
