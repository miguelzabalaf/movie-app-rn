import useHelpers from "../../../helpers";

const useMovieSelectors = () => {

  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  // Movies Now Playing
  const moviesNowPlayingDataSelector = createSelector(
    (state) => state.moviesNowPlaying,
    (moviesNowPlaying) => moviesNowPlaying
  );
  const moviesNowPlayingSelector = createSelector(
    (state) => state.moviesNowPlaying,
    (moviesNowPlaying) => moviesNowPlaying.movies
  );

  // Popular Movies
  const popularMoviesDataSelector = createSelector(
    (state) => state.popularMovies,
    (popularMovies) => popularMovies
  );
  const popularMoviesSelector = createSelector(
    (state) => state.popularMovies,
    (popularMovies) => popularMovies.movies
  );

  // Upcoming Movies
  const upcomingMoviesDataSelector = createSelector(
    (state) => state.upcomingMovies,
    (upcomingMovies) => upcomingMovies
  );
  const upcomingMoviesSelector = createSelector(
    (state) => state.upcomingMovies,
    (upcomingMovies) => upcomingMovies.movies
  );

  // Movie Selected
  const movieSelectedSelector = createSelector(
    (state) => state.movieSelected,
    (movieSelected) => movieSelected
  );

  // Movie Genres
  const movieGenresSelector = createSelector(
    (state) => state.movieGenres,
    (movieGenres) => movieGenres.genres
  );

  // Movie Genres
  const movieCreditsSelector = createSelector(
    (state) => state.movieSelectedCredits,
    (movieSelectedCredits) => movieSelectedCredits.credits
  );

  return {
    moviesNowPlayingDataSelector,
    moviesNowPlayingSelector,
    popularMoviesDataSelector,
    popularMoviesSelector,
    upcomingMoviesDataSelector,
    upcomingMoviesSelector,
    movieSelectedSelector,
    movieGenresSelector,
    movieCreditsSelector,
  };

};

export default useMovieSelectors;