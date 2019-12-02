import React from "react";

const BookList = props => {
  return (
    <div>
      booklist <br />
      {props.books.map(book => (
        <li>{book.title}</li>
      ))}{" "}
    </div>
  );
};

export default BookList;
