import { useEffect, useState } from "react";
import useModels from "../../../models";
import _ from 'lodash';
import useApi from "../../../api";
import useControllers from "../..";

const useDetailMovieScreen = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector, movieGenresSelector, movieCreditsSelector } = useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);
  const genres = useSelector(movieGenresSelector);
  const { departaments, credits } = useSelector(movieCreditsSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetMovieCredits, actRemoveMovieCredits } = useMovieActions();

  const { useGeneralHooks } = useControllers();
  const { useNavigation } = useGeneralHooks();
  const { goBack } = useNavigation();

  const [departamentSelected, setDepartamentSelected] = useState(departaments[0]);

  useEffect(() => {
    dispatch(actGetMovieCredits(movie.id));
  }, []);


  useEffect(() => {
    setInitialDepartamentCastSelected();
  }, [credits]);

  const setInitialDepartamentCastSelected = () => setDepartamentSelected(departaments[0]);

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

  const getCreditFilteredByDepartamentSelected = () => {
    return _.filter(credits, (credit) => credit.known_for_department === departamentSelected);
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
    departaments,
    departamentSelected,
    setDepartamentSelected,
    getCreditFilteredByDepartamentSelected,
    goToHomeScreen,
  };
};

export default useDetailMovieScreen;