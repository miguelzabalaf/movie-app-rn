import ConsoleData from "./ConsoleData";
import HorizontalMovieSlider from "./HorizontalMovieSlider";
import MovieOverviewDetail from "./MovieOverviewDetail";
import MoviePoster from "./MoviePoster";
import MoviePosterDetail from "./MoviePosterDetail";
import SpinnerLoader from "./SpinnerLoader";
import Subtitle from "./Subtitle";

const useComponents = () => {
  return {
    ConsoleData,
    SpinnerLoader,
    MoviePoster,
    Subtitle,
    HorizontalMovieSlider,
    MoviePosterDetail,
    MovieOverviewDetail,
  };
};

export default useComponents;