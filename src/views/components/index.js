import { lazy } from "react";
import ConsoleData from "./ConsoleData";
import HorizontalMovieSlider from "./HorizontalMovieSlider";
import ModalProfile from "./ModalProfile/ModalProfile";
import MovieOverviewDetail from "./MovieOverviewDetail";
import MoviePoster from "./MoviePoster";
import MoviePosterDetail from "./MoviePosterDetail";
import SpinnerLoader from "./SpinnerLoader";
import Subtitle from "./Subtitle";

const useComponents = () => {
  // Lazy imports
  // const MovieCastSection = lazy(() =>
  //   new Promise((resolve) => setTimeout(resolve, 500)).then(() => import("./MovieCastSection"))
  // );
  const MovieCastSection = lazy(() => import("./MovieCastSection"));
  const MovieResultSearch = lazy(() => import("./MovieResultSearch"));
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
    MovieResultSearch,
  };
};

export default useComponents;
