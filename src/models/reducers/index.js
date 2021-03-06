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
    moviesRecommendationsBySelectedMovie,
    searchMovieResult,
  } = useMovieReducers();

  return combineReducers({
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
    movieSelectedCredits,
    infoPersonSelected,
    moviesRecommendationsBySelectedMovie,
    searchMovieResult,
  });
};

export default useReducers;
