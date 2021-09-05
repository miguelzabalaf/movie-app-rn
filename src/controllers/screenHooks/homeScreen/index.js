import { useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";
import useGeneralHooks from "../../generalHooks";

const useHomeScreen = () => {

  // Controllers
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // API
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetAllHomeMovieData } = useMovieActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { moviesNowPlayingSelector, popularMoviesSelector } = useMovieSelectors();
  const moviesNowPlaying = useSelector(moviesNowPlayingSelector);
  const popularMovies = useSelector(popularMoviesSelector);

  const getAllHomeMovieData = () => {
    dispatch(actGetAllHomeMovieData());
  };

  useEffect(() => {
    getAllHomeMovieData();
  }, []);

  return {
    navigateTo,
    moviesNowPlaying,
    popularMovies
  };
};

export default useHomeScreen;