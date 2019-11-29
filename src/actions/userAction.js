export const newUser = user => {
  return dispatch => {
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
      id: user.id
    };
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: "ADD_USER", user }));
  };
};
