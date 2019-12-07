export const newBook = book => {
  return dispatch => {
    const body = {
      title: book.title,
      author: book.author,
      rating: book.rating,
      review: book.review,
      pages: book.pages,
      genre: book.genre
    };
    fetch("http://localhost:3001/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: "ADD_BOOK", book }));
  };
};
