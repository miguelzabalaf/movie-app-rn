import axios from "axios";

const useMovieProviders = () => {

  const getMoviesNowPlayingProvider = () => {
    return axios({
      method: 'get',
      url: '/movie/now_playing'
    });
  };

  return {
    getMoviesNowPlayingProvider,
  };

};

export default useMovieProviders;