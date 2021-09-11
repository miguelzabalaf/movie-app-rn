import useComponents from "./components";
import useScreens from "./screens";
import useSkeletons from "./skeletons";

const useViews = () => {
  return {
    useScreens,
    useComponents,
    useSkeletons,
  };
};

export default useViews;
