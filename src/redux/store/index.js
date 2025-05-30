import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import errorReducer from "../reducers/errorReducer";
import musicReducer from "../reducers/musicReducer";
import playingReducer from "../reducers/playingReducer";
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  error: errorReducer,
  music: musicReducer,
  selected: playingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
