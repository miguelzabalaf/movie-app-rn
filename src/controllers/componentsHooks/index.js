import useModalProfile from "./modalProfile";
import useMovieCastSection from "./movieCastSection";
import useMovieOverviewDetail from "./movieOverviewDetail";
import useMoviePoster from "./moviePoster";
import useMoviePosterDetail from "./moviePosterDetail";

const useComponentsHooks = () => {
  return {
    useMoviePoster,
    useMovieCastSection,
    useModalProfile,
    useMoviePosterDetail,
    useMovieOverviewDetail,
  };
};

export default useComponentsHooks;
