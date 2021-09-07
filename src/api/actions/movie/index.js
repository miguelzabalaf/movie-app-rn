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
    SET_MOVIE_SELECTED,
    REMOVE_MOVIE_SELECTED,
    GET_MOVIE_GENRES,
    GET_MOVIE_CREDITS,
    REMOVE_MOVIE_CREDITS,
  } = useMovieTypes();

  // Services
  const { useMovieServices } = useServices();
  const {
    getMoviesNowPlayingService,
    getPopularMoviesService,
    getUpcomingMoviesService,
    getMovieGenresService,
    getMovieCreditsService,
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
        dispatch(actGetMovieGenres()),
      ]);
      onSuccess && onSuccess(resp.data);
    } catch (error) {
      onError && onError(error);
    }
  };

  const actSetMovieSelected = (movie, onSuccess, onError) => dispatch => {
    try {
      dispatch({
        type: SET_MOVIE_SELECTED,
        payload: movie
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };

  const actRemoveMovieSelected = (onSuccess, onError) => {
    try {
      dispatch({
        type: REMOVE_MOVIE_SELECTED,
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };

  const actGetMovieGenres = (onSuccess, onError) => async dispatch => {
    try {
      const resp = await getMovieGenresService();
      dispatch({
        type: GET_MOVIE_GENRES,
        payload: resp.data
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError();
    }
  };

  const actGetMovieCredits = (movieId, onSuccess, onError) => async dispatch => {
    try {
      const resp = await getMovieCreditsService(movieId);
      dispatch({
        type: GET_MOVIE_CREDITS,
        payload: resp.data
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError();
    }
  };

  const actRemoveMovieCredits = (onSuccess, onError) => {
    try {
      dispatch({
        type: REMOVE_MOVIE_CREDITS,
      });
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  };

  return {
    actGetMogetMoviesNowPlaying,
    actGetPopularMovies,
    actGetUpcomingMovies,
    actGetAllHomeMovieData,
    actSetMovieSelected,
    actRemoveMovieSelected,
    actGetMovieGenres,
    actGetMovieCredits,
    actRemoveMovieCredits,
  };
};

export default useMovieActions;