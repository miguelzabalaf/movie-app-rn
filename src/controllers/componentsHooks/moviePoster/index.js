import useGeneralHooks from "../../generalHooks";
import useApi from "../../../api";
import useModels from "../../../models";
import { useNavigationState } from "@react-navigation/core";

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

  const stateNav = useNavigationState((state) => state);
  const actualScreen = stateNav.routeNames[stateNav.index];

  const stayInDetailMovieScreen = () => actualScreen === "DetailMovieScreen";

  const navigateAndSetMovieSelected = () => {
    !stayInDetailMovieScreen() && navigateTo("DetailMovieScreen");
    stayInDetailMovieScreen() && dispatch(actRemoveMovieCredits());
    stayInDetailMovieScreen() && dispatch(actRemoveMoviesRecommendations());
    movieSelected.id !== movie.id && dispatch(actSetMovieSelected(movie));
  };

  return {
    navigateAndSetMovieSelected,
  };
};

export default useMoviePoster;
