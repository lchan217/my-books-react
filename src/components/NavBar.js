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
    alert("A name was submitted: " + this.state.search);
    event.preventDefault();
    //insert fetch request here
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
      </div>
    );
  }
}

export default NavBar;
