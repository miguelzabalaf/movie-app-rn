import useGeneralHooks from "../../generalHooks";
import useApi from "../../../api";

const useMoviePoster = (movie) => {

  // Api
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actSetMovieSelected } = useMovieActions();

  // Controllers
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  const navigateAndSetMovieSelected = () => {
    navigateTo('DetailMovieScreen');
    dispatch(actSetMovieSelected(movie));
  };

  return {
    navigateAndSetMovieSelected,
  };
};

export default useMoviePoster;