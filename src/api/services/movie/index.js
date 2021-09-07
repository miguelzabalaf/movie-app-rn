import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useMovieServices = () => {

  const { useMovieProviders } = useProviders();
  const {
    getMoviesNowPlayingProvider,
    getPopularMoviesProvider,
    getUpcomingMoviesProvider,
    getMovieGenresProvider,
    getMovieCreditsProvider,
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
        resolve(await getPopularMoviesProvider());
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUpcomingMoviesService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await getUpcomingMoviesProvider());
      } catch (error) {
        reject(error);
      }
    });
  };

  const getMovieGenresService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await getMovieGenresProvider());
      } catch (error) {
        reject(error);
      }
    });
  };

  const getMovieCreditsService = (movieId) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await getMovieCreditsProvider(movieId));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getMoviesNowPlayingService,
    getPopularMoviesService,
    getUpcomingMoviesService,
    getMovieGenresService,
    getMovieCreditsService,
  };
};

export default useMovieServices;