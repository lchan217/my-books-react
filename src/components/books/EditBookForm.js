import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { newBook } from "../../actions/bookActions";
import { connect } from "react-redux";
import $ from "jquery";

class EditBookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      rating: "",
      review: "",
      pages: "",
      genre: "",
      author_id: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    let token = "Bearer " + localStorage.getItem("jwt");
    let body = {
      title: this.state.title,
      author: this.state.author,
      rating: this.state.rating,
      review: this.state.review,
      pages: this.state.pages,
      genre: this.state.genre,
      img: this.state.img,
      id: this.props.book.id
    };
    console.log(`token edit: ${token}`);
    $.ajax({
      url: "http://localhost:3001/api/books",
      type: "PUT",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(body),
      dataType: "json",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      context: this,
      success: function(results) {
        console.log(results);
        window.location.href = "/books";
        this.setState({
          title: "",
          author: "",
          rating: "",
          review: "",
          pages: "",
          genre: "",
          img: ""
        });
      }
    });
  };

  render() {
    const { title, author, rating, review, pages, genre, img } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        Edit Book
        <Form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            value={title}
            placeholder={this.props.book.title}
          ></input>
          <label>Author</label>
          <input
            type='text'
            name='author'
            onChange={handleChange}
            value={author}
            placeholder={this.props.book.author}
          ></input>
          <label>Rating</label>
          <input
            type='text'
            name='rating'
            onChange={handleChange}
            value={rating}
            placeholder={this.props.book.rating}
          ></input>
          <label>Review</label>
          <input
            type='text'
            name='review'
            onChange={handleChange}
            value={review}
            placeholder={this.props.book.review}
          ></input>
          <label>Pages</label>
          <input
            type='text'
            name='pages'
            onChange={handleChange}
            value={pages}
            placeholder={this.props.book.pages}
          ></input>
          <label>Genre</label>
          <input
            type='text'
            name='genre'
            onChange={handleChange}
            value={genre}
            placeholder={this.props.book.genre}
          ></input>
          <label>Book Cover</label>
          <input
            type='text'
            name='img'
            onChange={handleChange}
            value={img}
            placeholder={this.props.book.img}
          ></input>
          <Button> Submit </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { newBook })(EditBookForm);
