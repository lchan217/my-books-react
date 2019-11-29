const fetchBooks = id => {
  return dispatch => {
    return fetch("http://localhost:3001/api/books")
      .then(response => response.json())
      .then(books => console.log(books))
      .then(books => dispatch({ type: "FETCH_BOOKS", payload: books }));
  };
};
