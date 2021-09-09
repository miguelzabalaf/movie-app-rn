import useHelpers from "../../../helpers";
import useTypes from "../../../strings/types";
import useInitialStates from "../../initialStates";

const useMovieReducers = () => {

  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  // Types
  const { useMovieTypes } = useTypes();
  const {
    GET_MOVIES_NOW_PLAYING_DATA,
    GET_POPULAR_MOVIES_DATA,
    GET_UPCOMING_MOVIES_DATA,
    SET_MOVIE_SELECTED,
    REMOVE_MOVIE_SELECTED,
    GET_MOVIE_GENRES,
    GET_MOVIE_CREDITS,
    REMOVE_MOVIE_CREDITS,
    GET_INFO_PERSON,
    REMOVE_INFO_PERSON,
    GET_MOVIES_RECOMMENDATIONS,
    REMOVE_MOVIES_RECOMMENDATIONS
  } = useMovieTypes();

  // InitialStates
  const { movieInitialStates } = useInitialStates();
  const {
    initialStateMovies,
    initialStateMovieSelected,
    initialStateGenres,
    initialStateCredits,
    initialStatePersonSelected,
  } = movieInitialStates();

  const moviesNowPlaying = createReducer(initialStateMovies, {
    [GET_MOVIES_NOW_PLAYING_DATA](state, action) {
      const { results, page, total_pages } = action.payload;
      return {
        ...state,
        movies: results,
        page,
        totalPages: total_pages
      };
    }
  });

  const popularMovies = createReducer(initialStateMovies, {
    [GET_POPULAR_MOVIES_DATA](state, action) {
      const { results, page, total_pages } = action.payload;
      return {
        ...state,
        movies: results,
        page,
        totalPages: total_pages
      };
    }
  });

  const upcomingMovies = createReducer(initialStateMovies, {
    [GET_UPCOMING_MOVIES_DATA](state, action) {
      const { results, page, total_pages } = action.payload;
      return {
        ...state,
        movies: results,
        page: page,
        totalPages: total_pages
      };
    }
  });

  const movieSelected = createReducer(initialStateMovieSelected, {
    [SET_MOVIE_SELECTED](state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data
      };
    },
    [REMOVE_MOVIE_SELECTED](state) {
      return {
        ...state,
        ...initialStateMovieSelected,
      };
    }
  });

  const movieGenres = createReducer(initialStateGenres, {
    [GET_MOVIE_GENRES](state, action) {
      const { genres } = action.payload;
      return {
        ...state,
        genres
      };
    }
  });

  const movieSelectedCredits = createReducer(initialStateCredits, {
    [GET_MOVIE_CREDITS](state, action) {
      const { cast } = action.payload;
      return {
        ...state,
        credits: cast
      };
    },
    [REMOVE_MOVIE_CREDITS](state) {
      return {
        ...state,
        ...initialStateCredits
      };
    }
  });

  const infoPersonSelected = createReducer(initialStatePersonSelected, {
    [GET_INFO_PERSON](state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data
      };
    },
    [REMOVE_INFO_PERSON](state) {
      return {
        ...state,
        ...initialStatePersonSelected
      };
    }
  });

  const moviesRecommendationsBySelectedMovie = createReducer(initialStateMovies, {
    [GET_MOVIES_RECOMMENDATIONS](state, action) {
      const { results, page, total_pages } = action.payload;
      return {
        ...state,
        movies: results,
        page,
        totalPages: total_pages
      };
    },
    [REMOVE_MOVIES_RECOMMENDATIONS](state) {
      return {
        ...state,
        ...initialStateMovies
      };
    }
  });



  return {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
    movieSelectedCredits,
    infoPersonSelected,
    moviesRecommendationsBySelectedMovie,
  };

};

export default useMovieReducers;