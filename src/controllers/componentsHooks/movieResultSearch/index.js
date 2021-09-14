import useApi from "../../../api";
import useModels from "../../../models";
import useGeneralHooks from "../../generalHooks";

const useMovieResultSearch = () => {
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

  const navigateAndSetMovieSelected = (movie) => {
    navigateTo("DetailMovieScreen");
    movieSelected.id !== movie.id && dispatch(actSetMovieSelected(movie));
  };
  return {
    navigateAndSetMovieSelected,
  };
};

export default useMovieResultSearch;
