import useHelpers from "../../../helpers";
import useTypes from "../../../strings/types";

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
    GET_MOVIE_GENRES,
  } = useMovieTypes();

  const moviesNowPlaying = createReducer({
    movies: [],
    page: null,
    totalPages: null
  }, {
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

  const popularMovies = createReducer({
    movies: [],
    page: null,
    totalPages: null,
  }, {
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

  const upcomingMovies = createReducer({
    movies: [],
    page: null,
    totalPages: null,
  }, {
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

  const movieSelected = createReducer({
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: null,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: null,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: null,
    vote_count: null
  }, {
    [SET_MOVIE_SELECTED](state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data
      };
    }
  });

  const movieGenres = createReducer({
    genres: []
  }, {
    [GET_MOVIE_GENRES](state, action) {
      const { genres } = action.payload;
      return {
        ...state,
        genres
      };
    }
  });



  return {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    movieSelected,
    movieGenres,
  };

};

export default useMovieReducers;