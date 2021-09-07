import useModels from "../../../models";
import _ from 'lodash';

const useDetailMovieScreen = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector, movieGenresSelector } = useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);
  const genres = useSelector(movieGenresSelector);

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

  return {
    movie,
    getGenresList,
    getReleaseYear,
    getAverageAndProgress,
  };
};

export default useDetailMovieScreen;