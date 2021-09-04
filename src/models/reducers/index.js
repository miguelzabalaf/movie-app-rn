import { combineReducers } from "redux";
import useMovieReducers from "./movie";


const useReducers = () => {
  const { moviesNowPlaying } = useMovieReducers();
  return combineReducers({
    moviesNowPlaying,
  });
};

export default useReducers;