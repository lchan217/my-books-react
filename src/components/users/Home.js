import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";
import { logIn } from "../../actions/userAction";

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
    event.preventDefault();
    this.props(logIn(this.state));
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
          <Form>
            <Form.Field>
              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={email}
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="Password"
              />
            </Form.Field>
            <Button onSubmit={handleSubmit} type="submit">
              Submit
            </Button>
          </Form>
          <br />
          NEED TO IMPLEMENT: New User? Sign Up Here
        </Container>
      </div>
    );
  }
}

export default connect(null, { logIn })(Home);
