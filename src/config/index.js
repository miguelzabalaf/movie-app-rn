import useInterceptor from "./interceptor";
import useLogBox from "./logBox";
import useStoreConfig from "./redux";
const useConfig = () => {
  return {
    useInterceptor,
    useStoreConfig,
    useLogBox,
  };
};

export default useConfig;