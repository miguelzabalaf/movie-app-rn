import useComponentsHooks from "./componentsHooks";
import useGeneralHooks from "./generalHooks";
import useLayoutHooks from "./layoutHooks";
import useScreenHooks from "./screenHooks";

const useControllers = () => {
  return {
    useGeneralHooks,
    useComponentsHooks,
    useScreenHooks,
    useLayoutHooks,
  };
};

export default useControllers;
