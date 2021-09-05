import useHelpers from "../../../helpers";

const useMovieSelectors = () => {

  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const moviesNowPlayingDataSelector = createSelector(
    (state) => state.moviesNowPlaying,
    (moviesNowPlaying) => moviesNowPlaying
  );

  const moviesNowPlayingSelector = createSelector(
    (state) => state.moviesNowPlaying,
    (moviesNowPlaying) => moviesNowPlaying.movies
  );

  return {
    moviesNowPlayingSelector,
    moviesNowPlayingDataSelector
  };

};

export default useMovieSelectors;