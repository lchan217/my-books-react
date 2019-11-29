import React, { Component } from "react";
import { connect } from "react-redux";
import { newUser } from "../../actions/userAction";
import { Button, Form } from "semantic-ui-react";

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props(newUser(this.state));
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };
  render() {
    const { name, email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Name
                "
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Email
                "
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              placeholder="Password
                "
            ></input>
          </Form.Field>
        </Form>
        <Button onSubmit={handleSubmit} type="submit">
          Submit
        </Button>
      </div>
    );
  }
}

export default connect(null, { newUser })(NewUserForm);
