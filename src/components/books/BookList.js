import React from "react";
import { Link } from "react-router-dom";

const BookList = props => {
  return (
    <div>
      booklist <br />
      {props.books.map((book, idx) => (
        <li key={idx}>
          {book.title} <Link to='/edit'>Edit</Link>{" "}
          <Link to='/delete'>delete </Link>
        </li>
      ))}{" "}
    </div>
  );
};

export default BookList;
