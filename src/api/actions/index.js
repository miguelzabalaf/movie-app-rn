import { useDispatch } from "react-redux";
import useMovieActions from "./movie";

const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useMovieActions,
  };
};

export default useActions;