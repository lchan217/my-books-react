export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BOOK":
      debugger;
      const news = [...state, action.book];
      return news;
    default:
      return state;
  }
}
