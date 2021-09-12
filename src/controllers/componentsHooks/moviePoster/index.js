import useGeneralHooks from "../../generalHooks";
import useApi from "../../../api";
import useModels from "../../../models";
import useHelpers from "../../../helpers";

const useMoviePoster = (movie) => {
  // Api
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actSetMovieSelected, actRemoveMovieCredits, actRemoveMoviesRecommendations } =
    useMovieActions();

  // Controllers
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector } = useMovieSelectors();
  const movieSelected = useSelector(movieSelectedSelector);

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { iamStayInScreen } = useQuickFunctions();

  const navigateAndSetMovieSelected = () => {
    !iamStayInScreen("DetailMovieScreen") && navigateTo("DetailMovieScreen");
    iamStayInScreen("DetailMovieScreen") && dispatch(actRemoveMovieCredits());
    iamStayInScreen("DetailMovieScreen") && dispatch(actRemoveMoviesRecommendations());
    movieSelected.id !== movie.id && dispatch(actSetMovieSelected(movie));
  };

  return {
    navigateAndSetMovieSelected,
    iamStayInScreen,
  };
};

export default useMoviePoster;
