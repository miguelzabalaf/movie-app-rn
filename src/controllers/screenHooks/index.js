import useDetailMovieScreen from "./detailMovieScreen";
import useHomeScreen from "./homeScreen";
import useSearchScreen from "./searchScreen";

const useScreenHooks = () => {
  return {
    useHomeScreen,
    useDetailMovieScreen,
    useSearchScreen,
  };
};

export default useScreenHooks;
