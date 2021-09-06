import useDetailMovieScreen from "./detailMovieScreen";
import useHomeScreen from "./homeScreen";

const useScreenHooks = () => {
  return {
    useHomeScreen,
    useDetailMovieScreen,
  };
};

export default useScreenHooks;