import useReducers from "./reducers";
import useSelectors from "./selectors";
import useInitialStates from "./initialStates";

const useModels = () => {
  return {
    useReducers,
    useSelectors,
    useInitialStates,
  };
};

export default useModels;