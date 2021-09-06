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

  return {
    movie,
    getGenresList,
  };
};

export default useDetailMovieScreen;