import axios from "axios";

const useMovieProviders = () => {
  const getMoviesNowPlayingProvider = () => {
    return axios({
      method: "GET",
      url: "/movie/now_playing",
    });
  };

  const getPopularMoviesProvider = () => {
    return axios({
      method: "GET",
      url: "/movie/popular",
    });
  };

  const getUpcomingMoviesProvider = () => {
    return axios({
      method: "GET",
      url: "/movie/upcoming",
    });
  };

  const getMovieGenresProvider = () => {
    return axios({
      method: "GET",
      url: "/genre/movie/list",
    });
  };

  const getMovieCreditsProvider = (movieId) => {
    return axios({
      method: "GET",
      url: `/movie/${movieId}/credits`,
    });
  };

  const getInfoPersonProvider = (personId) => {
    return axios({
      method: "GET",
      url: `/person/${personId}`,
    });
  };

  const getMoviesRecommendationsProvider = (movieId) => {
    return axios({
      method: "GET",
      url: `/movie/${movieId}/recommendations`,
    });
  };

  const searchMoviesByQueryProvier = (query) => {
    return axios({
      method: "GET",
      url: `/search/movie`,
      params: {
        query,
      },
    });
  };

  return {
    getMoviesNowPlayingProvider,
    getPopularMoviesProvider,
    getUpcomingMoviesProvider,
    getMovieGenresProvider,
    getMovieCreditsProvider,
    getInfoPersonProvider,
    getMoviesRecommendationsProvider,
    searchMoviesByQueryProvier,
  };
};

export default useMovieProviders;
