export default function usersReducer(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      const newState = [...state, action.user];
      return newState;

    default:
      return state;
  }
}
