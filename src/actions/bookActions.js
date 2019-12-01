export const fetchBooks = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/books")
      .then(response => response.json())
      .then(books => {
        debugger;
      })
      .then(books => dispatch({ type: "FETCH_BOOKS", payload: books }))
      .catch(function() {
        console.log("fetchbooks error");
      });
  };
};
