import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions/bookActions.js";

class Books extends Component {
  componentDidMount() {
    // this.props.fetchBooks();
  }

  showBooks() {}

  render() {
    return <div>Books Component</div>;
  }
}

const mapStatetoProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: id => dispatch({ type: "FETCH_BOOKS", payload: id })
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Books);
