import { combineReducers } from "redux";
import useMovieReducers from "./movie";


const useReducers = () => {
  const { moviesNowPlaying, popularMovies } = useMovieReducers();
  return combineReducers({
    moviesNowPlaying,
    popularMovies,
  });
};

export default useReducers;