import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../action";

const initialState = {
  createdAt: new Date().toISOString(),
  content: [],
};
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter((j) => j.id !== action.payload),
      };
    default:
      return state;
  }
};
export default favoritesReducer;
