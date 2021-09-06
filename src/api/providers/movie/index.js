import axios from "axios";

const useMovieProviders = () => {

  const getMoviesNowPlayingProvider = () => {
    return axios({
      method: 'GET',
      url: '/movie/now_playing'
    });
  };

  const getPopularMoviesProvider = () => {
    return axios({
      method: 'GET',
      url: '/movie/popular'
    });
  };

  const getUpcomingMoviesProvider = () => {
    return axios({
      method: 'GET',
      url: '/movie/upcoming'
    });
  };

  return {
    getMoviesNowPlayingProvider,
    getPopularMoviesProvider,
    getUpcomingMoviesProvider,
  };

};

export default useMovieProviders;