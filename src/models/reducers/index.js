import { combineReducers } from "redux";
import useMovieReducers from "./movie";


const useReducers = () => {

  const {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
    movieSelectedCredits,
  } = useMovieReducers();

  return combineReducers({
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
    movieSelectedCredits,
  });
};

export default useReducers;