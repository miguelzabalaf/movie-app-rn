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
    infoPersonSelected,
  } = useMovieReducers();

  return combineReducers({
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
    movieSelectedCredits,
    infoPersonSelected,
  });
};

export default useReducers;