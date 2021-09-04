import { useSelector } from "react-redux";
import useMovieSelectors from "./movie";

const useSelectors = () => {
  return {
    useSelector,
    useMovieSelectors,
  };
};

export default useSelectors;