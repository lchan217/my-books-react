import React, { Component } from "react";
import $ from "jquery";
import EditBookForm from "./EditBookForm";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false,
      book: null
    };
  }

  handleOnClick = book => {
    this.handleEdit(book);
    this.showEdit();
  };

  handleEdit = book => {
    this.setState({ showEdit: true, book: book });
  };

  showEdit = () => {
    if (this.state.showEdit) {
      return (
        <div>
          <EditBookForm book={this.state.book} />
          <br />
        </div>
      );
    }
  };

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
        <h1>booklist</h1>
        {this.showEdit()}
        {this.props.books.map((book, idx) => (
          <li key={idx}>
            {book.id} - {book.title} by {book.author}{" "}
            <button onClick={() => this.handleOnClick(book)}>Edit</button>
            <button onClick={() => this.handleDelete(book.id)}>Delete</button>
          </li>
        ))}{" "}
      </div>
    );
  }
}

export default BookList;
