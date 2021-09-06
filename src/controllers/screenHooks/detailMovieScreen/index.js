import useModels from "../../../models";

const useDetailMovieScreen = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieSelectedSelector } = useMovieSelectors();
  const movie = useSelector(movieSelectedSelector);

  return {
    movie,
  };
};

export default useDetailMovieScreen;