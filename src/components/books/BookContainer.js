import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import BookList from "./BookList";
import NewBookForm from "./NewBookForm";

class BookContainer extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    let token = "Bearer " + localStorage.getItem("jwt");
    console.log(`token: ${token}`);
    $.ajax({
      url: "http://localhost:3001/api/books",
      type: "GET",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", token);
      },
      context: this,
      // Allows us to use this.setState inside success
      success: function(results) {
        console.log(results);
        if (this._isMounted) {
          // results.map(result => delete result.user);
          this.setState({ books: results });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        Books Component
        <NewBookForm />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

// const mapStatetoProps = state => {
//   return { books: state.books };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBooks: () => dispatch(fetchBooks())
//   };
// };

export default connect(null, null)(BookContainer);
