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
  const { actGetMogetMoviesNowPlaying } = useMovieActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { moviesNowPlayingSelector } = useMovieSelectors();
  const moviesNowPlaying = useSelector(moviesNowPlayingSelector);

  const getMoviesNowPlayingData = () => {
    // dispatch(actGetMogetMoviesNowPlaying());
  };

  useEffect(() => {
    getMoviesNowPlayingData();
  }, []);

  return {
    navigateTo,
    moviesNowPlaying
  };
};

export default useHomeScreen;