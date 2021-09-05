import useHelpers from "../../../helpers";
import useTypes from "../../../strings/types";

const useMovieReducers = () => {

  // Helpers
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  // Types
  const { useMovieTypes } = useTypes();
  const { GET_MOVIES_NOW_PLAYING_DATA } = useMovieTypes();

  const moviesNowPlaying = createReducer({
    movies: [],
    page: null,
    totalPages: null
  }, {
    [GET_MOVIES_NOW_PLAYING_DATA](state, action) {
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