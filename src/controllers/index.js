import useComponentsHooks from "./componentsHooks";
import useGeneralHooks from "./generalHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
  return {
    useGeneralHooks,
    useComponentsHooks,
    useScreenHooks,
  };
};

export default useControllers;