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
    (movieSelectedCredits) => {
      const credits = movieSelectedCredits.credits;
      const departaments = credits.reduce((allDepartaments, credit) => {
        return Array.from(new Set([...allDepartaments, credit.known_for_department]));
      }, []);
      return {
        credits,
        departaments,
      };
    }
  );

  // Person Selected
  const infoPersonSelectedSelector = createSelector(
    (state) => state.infoPersonSelected,
    (infoPersonSelected) => infoPersonSelected
  );

  // Movies Now Playing
  const moviesRecommendationsDataSelector = createSelector(
    (state) => state.moviesRecommendationsBySelectedMovie,
    (moviesRecommendationsBySelectedMovie) => moviesRecommendationsBySelectedMovie
  );
  const moviesRecommendationsSelector = createSelector(
    (state) => state.moviesRecommendationsBySelectedMovie,
    (moviesRecommendationsBySelectedMovie) => moviesRecommendationsBySelectedMovie.movies
  );
  // Search Movies By Query
  const searchMovieResultDataSelector = createSelector(
    (state) => state.searchMovieResult,
    (searchMovieResult) => searchMovieResult
  );
  const searchMovieResultSelector = createSelector(
    (state) => state.searchMovieResult,
    (searchMovieResult) => searchMovieResult.movies
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
    infoPersonSelectedSelector,
    moviesRecommendationsDataSelector,
    moviesRecommendationsSelector,
    searchMovieResultDataSelector,
    searchMovieResultSelector,
  };
};

export default useMovieSelectors;
