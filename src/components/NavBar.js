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
        </Menu>
      </div>
    );
  }
}

export default NavBar;
