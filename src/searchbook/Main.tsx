import React, { useState } from "react";
import Search from "./Search";
import axios from "axios";
import Book from "./Book";

export interface IProp {
  title: string;
  authors: string;
  thumbnail: string;
  price: number;
}
const Main = () => {
  const [isRender, setIsRender] = useState(false);
  const [bookT, setBookT] = useState<IProp[]>([]);
  const toAdd = (title: string) => {
    axios
      .get("https://dapi.kakao.com/v3/search/book", {
        params: {
          query: title,
        },
        headers: {
          Authorization: "",
        },
      })
      .then((res) => {
        setBookT(res.data.documents);
        setIsRender(true);
      });
  };
  return (
    <div>
      <h1>Search Books!</h1>
      <Search toAdd={toAdd} />
      {isRender ? (
        bookT.map((book) => (
          <Book
            title={book.title}
            authors={book.authors}
            thumbnail={book.thumbnail}
            price={book.price}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Main;
