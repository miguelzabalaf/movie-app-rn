import { useEffect } from "react";
import useModels from "../../../models";
import useApi from "../../../api";
import useGeneralHooks from "../../generalHooks";
import _ from 'lodash';
import { Linking } from "react-native";

const useDetailMovieScreen = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector, movieGenresSelector, infoPersonSelectedSelector } = useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);
  const genres = useSelector(movieGenresSelector);
  const personSelected = useSelector(infoPersonSelectedSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetMovieCredits, actRemoveMovieCredits, actRemoveInfoPerson } = useMovieActions();

  const { useNavigation } = useGeneralHooks();
  const { goBack } = useNavigation();

  useEffect(() => {
    !movie && goBack();
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

  const handleShowModalOfInfoPerson = () => personSelected?.id ? true : false;

  const handleHideModalOfInfoPerson = () => dispatch(actRemoveInfoPerson());

  const getProfileUrlImg = (item) => {
    return `https://image.tmdb.org/t/p/w500${item.profile_path}`;
  };

  const getDateFormat = (date) => {
    const dateFormat = new Date(date);
    return `${dateFormat.getDay()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}`;
  };

  const openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
      supported && Linking.openURL(url);
    });
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
    personSelected,
    handleShowModalOfInfoPerson,
    handleHideModalOfInfoPerson,
    getProfileUrlImg,
    getDateFormat,
    openUrl,
  };
};

export default useDetailMovieScreen;