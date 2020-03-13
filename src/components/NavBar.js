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
            <form>
              <input
                type='text'
                placeholder='Search books'
                value={this.state.value}
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
