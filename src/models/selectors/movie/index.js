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

  const popularMoviesDataSelector = createSelector(
    (state) => state.popularMovies,
    (popularMovies) => popularMovies
  );

  const popularMoviesSelector = createSelector(
    (state) => state.popularMovies,
    (popularMovies) => popularMovies.movies
  );

  return {
    moviesNowPlayingDataSelector,
    moviesNowPlayingSelector,
    popularMoviesDataSelector,
    popularMoviesSelector,
  };

};

export default useMovieSelectors;