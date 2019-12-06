import React, { Component } from "react";
import { connect } from "react-redux";
import { newUser } from "../../actions/userActions";
import { Button, Form } from "semantic-ui-react";

class NewUserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      id: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.newUser(this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
      id: ""
    });
    this.props.history.push("/");
  };
  render() {
    const { name, email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              type='text'
              name='name'
              onChange={handleChange}
              value={name}
              placeholder='Name
                '
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={handleChange}
              value={email}
              placeholder='Email
                '
            ></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              value={password}
              placeholder='Password
                '
            ></input>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStatetoProps, { newUser })(NewUserForm);
