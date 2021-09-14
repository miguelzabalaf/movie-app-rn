import useModalProfile from "./modalProfile";
import useMovieCastSection from "./movieCastSection";
import useMovieOverviewDetail from "./movieOverviewDetail";
import useMoviePoster from "./moviePoster";
import useMoviePosterDetail from "./moviePosterDetail";
import useMovieResultSearch from "./movieResultSearch";

const useComponentsHooks = () => {
  return {
    useMoviePoster,
    useMovieCastSection,
    useModalProfile,
    useMoviePosterDetail,
    useMovieOverviewDetail,
    useMovieResultSearch,
  };
};

export default useComponentsHooks;
