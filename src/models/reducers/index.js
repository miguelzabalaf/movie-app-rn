import { combineReducers } from "redux";
import useMovieReducers from "./movie";


const useReducers = () => {

  const {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
  } = useMovieReducers();

  return combineReducers({
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
  });
};

export default useReducers;