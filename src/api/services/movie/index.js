import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useMovieServices = () => {

  const { useMovieProviders } = useProviders();
  const { getMoviesNowPlayingProvider } = useMovieProviders();

  const getMoviesNowPlayingService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getMoviesNowPlayingProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getMoviesNowPlayingService,
  };
};

export default useMovieServices;