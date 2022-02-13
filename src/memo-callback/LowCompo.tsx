import React, { useMemo } from "react";
interface Prop {
  color: string;
  movie: string;
}
const boostColor = (col: string) => {
  console.log("color");
  return <b>{col}</b>;
};
const boostMovie = (mov: string) => {
  console.log("movie");
  return <b>{mov}</b>;
};

const LowCompo = ({ color, movie }: Prop) => {
  const colorKor = useMemo(() => boostColor(color), [color]);
  const movieKor = useMemo(() => boostMovie(movie), [movie]);
  return (
    <div>
      <h1>제가 좋아하는 색은 {colorKor} 입니다</h1>
      <h1>제가 좋아하는 영화는 {movieKor} 입니다</h1>
    </div>
  );
};

export default LowCompo;
