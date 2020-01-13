import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookList extends Component {
  handleDelete = id => {
    debugger;
  };
  render() {
    return (
      <div>
        booklist <br />
        {this.props.books.map((book, idx) => (
          <li key={idx}>
            {book.id} - {book.title} by {book.author}{" "}
            <Link to='edit'>
              <button type='button'>Edit</button>
            </Link>
            <button onClick={() => this.handleDelete(book.id)}>Delete</button>
          </li>
        ))}{" "}
      </div>
    );
  }
}

export default BookList;
