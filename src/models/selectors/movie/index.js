import useHelpers from "../../../helpers";

const useMovieSelectors = () => {

  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const moviesNowPlayingSelector = createSelector(
    (state) => state.moviesNowPlaying,
    (moviesNowPlaying) => moviesNowPlaying
  );

  return {
    moviesNowPlayingSelector,
  };

};

export default useMovieSelectors;