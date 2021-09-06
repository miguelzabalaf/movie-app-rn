import { combineReducers } from "redux";
import useMovieReducers from "./movie";


const useReducers = () => {

  const {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
  } = useMovieReducers();

  return combineReducers({
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
  });
};

export default useReducers;