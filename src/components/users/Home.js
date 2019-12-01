import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const request = {
      auth: { email: this.state.email, password: this.state.password }
    };
    $.ajax({
      url: "http://localhost:3001/api/user_token",
      type: "POST",
      data: request,
      dataType: "json",
      success: function(result) {
        console.log("Success:", result);
        localStorage.setItem("jwt", result.jwt);
        if (result) {
          window.location.href = "/books";
        }
      },
      error: function(jqxhr, status, exception) {
        console.log("Exception:", exception);
      }
    });
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <Container>
          <h1>Please Log In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input
                type='text'
                name='email'
                onChange={handleChange}
                value={email}
                placeholder='Email'
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                value={password}
                placeholder='Password'
              />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
          <br />
          New User? Sign up <Link to='/newUser'>here</Link>
        </Container>
      </div>
    );
  }
}

export default connect(null, null)(Home);
