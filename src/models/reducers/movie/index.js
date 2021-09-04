import useHelpers from "../../../helpers";


const useMovieReducers = () => {

  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const moviesNowPlaying = createReducer({
    movies: [],
    page: null,
    totalPages: null
  }, {
    ['SET_MOVIES_NOW_PLAYING'](state, action) {
      const data = action.payload;
      return {
        ...state,
        movies: data.results,
        page: data.page,
        totalPages: data.total_pages
      };
    }
  });

  return {
    moviesNowPlaying
  };

};

export default useMovieReducers;