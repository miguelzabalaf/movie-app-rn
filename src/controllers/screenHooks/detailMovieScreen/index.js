import { useEffect, useState } from "react";
import useModels from "../../../models";
import _ from 'lodash';
import useApi from "../../../api";

const useDetailMovieScreen = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector, movieGenresSelector, movieCreditsSelector } = useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);
  const genres = useSelector(movieGenresSelector);
  const { departaments, credits } = useSelector(movieCreditsSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetMovieCredits } = useMovieActions();

  const [departamentSelected, setDepartamentSelected] = useState(departaments[0]);


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

  const getCreditFilteredByDepartamentSelected = () => {
    return _.filter(credits, (credit) => credit.known_for_department === departamentSelected);
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
  };
};

export default useDetailMovieScreen;