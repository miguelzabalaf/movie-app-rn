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
    REMOVE_MOVIE_SELECTED,
    GET_MOVIE_GENRES,
    GET_MOVIE_CREDITS,
    REMOVE_MOVIE_CREDITS,
    GET_INFO_PERSON,
    REMOVE_INFO_PERSON,
    GET_MOVIES_RECOMMENDATIONS,
    REMOVE_MOVIES_RECOMMENDATIONS
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
    },
    [REMOVE_MOVIE_SELECTED](state) {
      return {
        ...state,
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

  const movieSelectedCredits = createReducer({
    credits: []
  }, {
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
        credits: []
      };
    }
  });

  const infoPersonSelected = createReducer({
    adult: false,
    also_known_as: [],
    biography: "",
    birthday: "",
    deathday: null,
    gender: null,
    homepage: "",
    id: null,
    imdb_id: "",
    known_for_department: "",
    name: "",
    place_of_birth: "",
    popularity: null,
    profile_path: ""
  }, {
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
        adult: false,
        also_known_as: [],
        biography: "",
        birthday: "",
        deathday: null,
        gender: null,
        homepage: "",
        id: null,
        imdb_id: "",
        known_for_department: "",
        name: "",
        place_of_birth: "",
        popularity: null,
        profile_path: ""
      };
    }
  });

  const moviesRecommendationsBySelectedMovie = createReducer({
    movies: [],
    page: null,
    totalPages: null,
  }, {
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
        movies: [],
        page: null,
        totalPages: null,
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