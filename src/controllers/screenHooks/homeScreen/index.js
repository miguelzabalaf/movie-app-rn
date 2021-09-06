import { useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";

const useHomeScreen = () => {

  // API
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetAllHomeMovieData } = useMovieActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const {
    moviesNowPlayingSelector,
    popularMoviesSelector,
    upcomingMoviesSelector,
  } = useMovieSelectors();

  // Selectors
  const moviesNowPlaying = useSelector(moviesNowPlayingSelector);
  const popularMovies = useSelector(popularMoviesSelector);
  const upcomingMovies = useSelector(upcomingMoviesSelector);

  const getAllHomeMovieData = () => {
    dispatch(actGetAllHomeMovieData());
  };

  useEffect(() => {
    getAllHomeMovieData();
  }, []);

  return {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
    getAllHomeMovieData,
  };
};

export default useHomeScreen;