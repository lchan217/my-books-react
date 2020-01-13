import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class BookList extends Component {
  handleDelete = id => {
    let token = "Bearer " + localStorage.getItem("jwt");
    console.log(`token delete: ${token}`);

    $.ajax({
      url: `http://localhost:3001/api/books`,
      type: "DELETE",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(`${id}`),
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      context: this,
      success: function(results) {
        console.log(results);
        window.location.href = "/books";
      }
    });
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
