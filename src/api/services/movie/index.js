import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useMovieServices = () => {

  const { useMovieProviders } = useProviders();
  const {
    getMoviesNowPlayingProvider,
    getPopularMoviesProvider,
    getUpcomingMoviesProvider,
  } = useMovieProviders();

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
        resolve(await trackPromise(getPopularMoviesProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUpcomingMoviesService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getUpcomingMoviesProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getMoviesNowPlayingService,
    getPopularMoviesService,
    getUpcomingMoviesService,
  };
};

export default useMovieServices;