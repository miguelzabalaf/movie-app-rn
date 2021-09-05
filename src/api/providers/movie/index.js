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

  return {
    getMoviesNowPlayingProvider,
    getPopularMoviesProvider
  };

};

export default useMovieProviders;