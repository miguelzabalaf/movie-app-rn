import ConsoleData from "./ConsoleData";
import HorizontalMovieSlider from "./HorizontalMovieSlider";
import ModalProfile from "./ModalProfile/ModalProfile";
import MovieCastSection from "./MovieCastSection/MovieCastSection";
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
    MovieCastSection,
    ModalProfile,
  };
};

export default useComponents;