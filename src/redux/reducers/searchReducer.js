import { SELECT_SEARCH } from "../action";

const initialState = {
  content: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEARCH:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
