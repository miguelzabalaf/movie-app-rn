import { useEffect } from "react";
import useModels from "../../../models";
import useApi from "../../../api";
import useGeneralHooks from "../../generalHooks";
import _ from 'lodash';

const useDetailMovieScreen = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector, movieGenresSelector } = useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);
  const genres = useSelector(movieGenresSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetMovieCredits, actRemoveMovieCredits } = useMovieActions();

  const { useNavigation } = useGeneralHooks();
  const { goBack } = useNavigation();

  useEffect(() => {
    dispatch(actGetMovieCredits(movie.id));
  }, []);

  const getGenresList = () => {
    return _.filter(genres, (genre) => movie.genre_ids.includes(genre.id));
  };

  const getReleaseYear = () => {
    const date = new Date(movie.release_date);
    return date.getFullYear();
  };

  const getAverageAndProgress = () => {
    const average = movie.vote_average * 10;
    const progress = average * 50 / 100;
    return {
      average,
      progress
    };
  };

  const goToHomeScreen = () => {
    goBack();
    dispatch(actRemoveMovieCredits());
  };

  return {
    movie,
    getGenresList,
    getReleaseYear,
    getAverageAndProgress,
    goToHomeScreen,
  };
};

export default useDetailMovieScreen;