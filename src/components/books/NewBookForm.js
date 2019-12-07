import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { newBook } from "../../actions/bookActions";
import { connect } from "react-redux";

class NewBookForm extends Component {
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
    this.props.newBook(this.state);
    this.setState({
      title: "",
      author: "",
      rating: "",
      review: "",
      pages: "",
      genre: "",
      author_id: ""
    });
  };

  render() {
    const { title, author, rating, review, pages, genre } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        new book form
        <Form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type='text'
            name='title'
            onChange={handleChange}
            value={title}
            placeholder='Title
                '
          ></input>
          <label>Author</label>
          <input
            type='text'
            name='author'
            onChange={handleChange}
            value={author}
            placeholder='Author
                '
          ></input>
          <label>Rating</label>
          <input
            type='text'
            name='rating'
            onChange={handleChange}
            value={rating}
            placeholder='Rating
                '
          ></input>
          <label>Review</label>
          <input
            type='text'
            name='review'
            onChange={handleChange}
            value={review}
            placeholder='Review
                '
          ></input>
          <label>Pages</label>
          <input
            type='text'
            name='pages'
            onChange={handleChange}
            value={pages}
            placeholder='Pages
                '
          ></input>
          <label>Genre</label>
          <input
            type='text'
            name='genre'
            onChange={handleChange}
            value={genre}
            placeholder='Genre
                '
          ></input>
          <Button> Submit </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { newBook })(NewBookForm);
