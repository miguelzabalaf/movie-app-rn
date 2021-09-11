import { useEffect } from "react";
import useModels from "../../../models";
import useApi from "../../../api";
import useGeneralHooks from "../../generalHooks";
import _ from "lodash";
import { Linking } from "react-native";

const useDetailMovieScreen = () => {
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector, movieGenresSelector, moviesRecommendationsSelector } =
    useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);
  const moviesRecommendationa = useSelector(moviesRecommendationsSelector);
  const genres = useSelector(movieGenresSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const {
    actRemoveMovieCredits,
    actRemoveMoviesRecommendations,
    actGetCastAndRecomendationsMovieById,
  } = useMovieActions();

  const { useNavigation } = useGeneralHooks();
  const { goBack } = useNavigation();

  useEffect(() => {
    !movie && goBack();
    dispatch(actGetCastAndRecomendationsMovieById(movie.id));
  }, [movie]);

  const getGenresList = () => {
    return _.filter(genres, (genre) => movie.genre_ids.includes(genre.id));
  };

  const getReleaseYear = () => {
    const date = new Date(movie.release_date);
    return date.getFullYear();
  };

  const getAverageAndProgress = () => {
    const average = Math.round(movie.vote_average * 10);
    const progress = (average * 50) / 100;
    return {
      average,
      progress,
    };
  };

  const goToHomeScreen = () => {
    goBack();
    dispatch(actRemoveMovieCredits());
    dispatch(actRemoveMoviesRecommendations());
  };

  return {
    movie,
    getGenresList,
    getReleaseYear,
    getAverageAndProgress,
    goToHomeScreen,
    moviesRecommendationa,
  };
};

export default useDetailMovieScreen;
