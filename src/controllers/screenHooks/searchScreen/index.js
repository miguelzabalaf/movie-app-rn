import useModels from "../../../models";

const useSearchScreen = () => {
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { searchMovieResultSelector } = useMovieSelectors();
  const movies = useSelector(searchMovieResultSelector);
  return {
    movies,
  };
};

export default useSearchScreen;
