import React from "react";
import { Container, Form } from "semantic-ui-react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <Container>
          <h1>Please Log In</h1>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
          </Form>
          <br />
          NEED TO IMPLEMENT: New User? Sign Up Here
        </Container>
      </div>
    );
  }
}

export default Home;
