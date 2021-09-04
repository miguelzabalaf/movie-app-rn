import axios from "axios";

const useMoviesProviders = () => {

  const getMoviesNowPlayingProvider = () => {
    return axios({
      method: 'GET',
      url: '/movie/now_playing'
    });
  };

  return {
    getMoviesNowPlayingProvider,
  };

};

export default useMoviesProviders;