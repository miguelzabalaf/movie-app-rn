import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useMovieServices = () => {

  const { useMovieProviders } = useProviders();
  const { getMoviesNowPlayingProvider, getPopularMoviesProvider } = useMovieProviders();

  const getMoviesNowPlayingService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getMoviesNowPlayingProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getPopularMoviesService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await getPopularMoviesProvider());
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getMoviesNowPlayingService,
    getPopularMoviesService,
  };
};

export default useMovieServices;