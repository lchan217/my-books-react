import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        document.getElementById("search-results").innerHTML =
          xhttp.responseText;
      }
    };
    xhttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=K5O3q88LUwbvFyxwKQ40Q&q=${this.state.search}`,
      true
    );
    xhttp.send();
  };

  render() {
    return (
      <div className='navBar'>
        <Menu>
          <Menu.Item className='menu-item' as={Link} to='/feed'>
            Home
          </Menu.Item>
          <Menu.Item className='menu-item' as={Link} to='/books'>
            My Books
          </Menu.Item>
          <Menu.Item className='menu-item' as={Link} to='/not-sure-yet'>
            Browse
          </Menu.Item>
          <Menu.Item className='menu-item' as={Link} to='/not-sure-yet'>
            Community
          </Menu.Item>
          <Menu.Item className='menu-item'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                placeholder='Search books'
                value={this.state.search}
                onChange={this.handleChange}
              ></input>
            </form>
          </Menu.Item>
        </Menu>
        <div id='search-results'>Search Results: </div>
      </div>
    );
  }
}

export default NavBar;
