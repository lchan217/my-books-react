import React from "react";

const BookList = props => {
  return (
    <div>
      booklist <br />
      {props.books.map((book, idx) => (
        <li key={idx}>{book.title}</li>
      ))}{" "}
    </div>
  );
};

export default BookList;
