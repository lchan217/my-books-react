export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BOOKS":
      debugger;
      return action.payload;
    default:
      return state;
  }
}
