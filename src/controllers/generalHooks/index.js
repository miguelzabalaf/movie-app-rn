import useDebouncedValue from "./debouncedValue";
import useNavigation from "./navigation";

const useGeneralHooks = () => {
  return {
    useNavigation,
    useDebouncedValue,
  };
};

export default useGeneralHooks;
