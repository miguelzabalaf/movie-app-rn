import useModalProfile from "./modalProfile";
import useMovieCastSection from "./movieCastSection";
import useMoviePoster from "./moviePoster";

const useComponentsHooks = () => {
  return {
    useMoviePoster,
    useMovieCastSection,
    useModalProfile,
  };
};

export default useComponentsHooks;