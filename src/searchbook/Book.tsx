import React from "react";
import { IProp } from "./Main";

const Book = ({ title, authors, price, thumbnail }: IProp) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail} alt="책 이미지" />
      <h2>{authors}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Book;
