import useComponents from "./components";
import useLayouts from "./layouts";
import useScreens from "./screens";
import useSkeletons from "./skeletons";

const useViews = () => {
  return {
    useLayouts,
    useScreens,
    useComponents,
    useSkeletons,
  };
};

export default useViews;
