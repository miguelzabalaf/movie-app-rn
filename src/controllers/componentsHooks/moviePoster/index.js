import useGeneralHooks from "../../generalHooks";
import useApi from "../../../api";
import useModels from "../../../models";

const useMoviePoster = (movie) => {

  // Api
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actSetMovieSelected } = useMovieActions();

  // Controllers
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector } = useMovieSelectors();
  const movieSelected = useSelector(movieSelectedSelector);

  const navigateAndSetMovieSelected = () => {
    navigateTo('DetailMovieScreen');
    movieSelected.id !== movie.id && dispatch(actSetMovieSelected(movie));
  };

  return {
    navigateAndSetMovieSelected,
  };
};

export default useMoviePoster;