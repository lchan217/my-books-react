import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";

class Books extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
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
      success: function(result) {
        console.log(result);
        if (this._isMounted) {
          this.setState({ books: JSON.stringify(result) });
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
        {this.state.books}
      </div>
    );
  }
}

// const mapStatetoProps = state => {
//   return {
//     books: state.books
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBooks: () => dispatch(fetchBooks())
//   };
// };

export default connect(null, null)(Books);
