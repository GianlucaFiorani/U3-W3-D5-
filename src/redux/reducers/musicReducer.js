import { SET_MUSIC, SET_MUSIC_LOADING_OFF, SET_MUSIC_LOADING_ON } from "../action";

const initialState = {
  content: [],
  isLoading: false,
  search: "",
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return {
        ...state,
        content: action.payload,
      };

    case SET_MUSIC_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case SET_MUSIC_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default musicReducer;
