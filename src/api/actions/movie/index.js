import useStrings from "../../../strings";
import useServices from "../../services";

const useMovieActions = () => {

  // Strings
  const { useTypes } = useStrings();
  const { useMovieTypes } = useTypes();
  const { GET_MOVIES_NOW_PLAYING_DATA } = useMovieTypes();

  // Services
  const { useMovieServices } = useServices();
  const { getMoviesNowPlayingService } = useMovieServices();

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

  return {
    actGetMogetMoviesNowPlaying,
  };
};

export default useMovieActions;