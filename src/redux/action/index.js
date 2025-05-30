export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_MUSIC = "SET_MUSIC";
export const SET_MUSIC_LOADING_ON = "SET_MUSIC_LOADING_ON";
export const SET_MUSIC_LOADING_OFF = "SET_MUSIC_LOADING_OFF";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_SEARCH = "SET_SEARCH";
export const SELECT_PLAY = "SELECT_PLAY";

export const addToFaoritesAction = (song) => ({ type: ADD_TO_FAVORITES, payload: song });
export const selectPlayAction = (song) => ({ type: SELECT_PLAY, payload: song });
export const removeFromFavoritesAction = (id) => ({ type: REMOVE_FROM_FAVORITES, payload: id });

export const getMusicAction = (endpoint) => {
  return async (dispatch, getState) => {
    const globalState = getState();
    dispatch({ type: SET_MUSIC_LOADING_ON });
    try {
      let resp = await fetch(endpoint);
      if (resp.ok) {
        let fetchedMusic = await resp.json();
        dispatch({ type: SET_MUSIC, payload: fetchedMusic });
        dispatch({ type: SET_SEARCH, payload: endpoint.replace("https://striveschool-api.herokuapp.com/api/deezer/search?q=", "") });
      } else {
        console.log("error");
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      console.log(error);

      dispatch({ type: HAS_ERROR_ON });
      dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
    } finally {
      dispatch({ type: SET_MUSIC_LOADING_OFF });
    }
  };
};
