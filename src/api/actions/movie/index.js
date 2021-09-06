import useStrings from "../../../strings";
import useServices from "../../services";

const useMovieActions = () => {

  // Strings
  const { useTypes } = useStrings();
  const { useMovieTypes } = useTypes();
  const {
    GET_MOVIES_NOW_PLAYING_DATA,
    GET_POPULAR_MOVIES_DATA,
    GET_UPCOMING_MOVIES_DATA,
  } = useMovieTypes();

  // Services
  const { useMovieServices } = useServices();
  const {
    getMoviesNowPlayingService,
    getPopularMoviesService,
    getUpcomingMoviesService,
  } = useMovieServices();

  const actGetMogetMoviesNowPlaying = (onSuccess, onError) => async dispatch => {
    try {
      const resp = await getMoviesNowPlayingService();
      dispatch({
        type: GET_MOVIES_NOW_PLAYING_DATA,
        payload: resp.data
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError();
    }
  };

  const actGetPopularMovies = (onSuccess, onError) => async dispatch => {
    try {
      const resp = await getPopularMoviesService();
      dispatch({
        type: GET_POPULAR_MOVIES_DATA,
        payload: resp.data
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError();
    }
  };

  const actGetUpcomingMovies = (onSuccess, onError) => async dispatch => {
    try {
      const resp = await getUpcomingMoviesService();
      dispatch({
        type: GET_UPCOMING_MOVIES_DATA,
        payload: resp.data
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError();
    }
  };

  const actGetAllHomeMovieData = (onSuccess, onError) => async dispatch => {
    try {
      const resp = await Promise.all([
        dispatch(actGetMogetMoviesNowPlaying()),
        dispatch(actGetPopularMovies()),
        dispatch(actGetUpcomingMovies()),
      ]);
      onSuccess && onSuccess(resp.data);
    } catch (error) {
      onError && onError(error);
    }
  };

  return {
    actGetMogetMoviesNowPlaying,
    actGetPopularMovies,
    actGetUpcomingMovies,
    actGetAllHomeMovieData,
  };
};

export default useMovieActions;