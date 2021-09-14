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
    getInfoPersonProvider,
    getMoviesRecommendationsProvider,
    searchMoviesByQueryProvier,
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
        resolve(await trackPromise(getMovieCreditsProvider(movieId)));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getPersonInfoService = (personId) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await getInfoPersonProvider(personId));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getMoviesRecomendationsService = (movieId) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getMoviesRecommendationsProvider(movieId)));
      } catch (error) {
        reject(error);
      }
    });
  };

  const searchMoviesByQueryService = (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await searchMoviesByQueryProvier(query));
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
    getPersonInfoService,
    getMoviesRecomendationsService,
    searchMoviesByQueryService,
  };
};

export default useMovieServices;
