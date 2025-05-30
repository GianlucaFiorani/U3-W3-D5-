import { SELECT_PLAY } from "../action";

const initialState = {
  content: null,
};

const playingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PLAY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default playingReducer;
