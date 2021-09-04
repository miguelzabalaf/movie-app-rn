import useInterceptor from "./interceptor";
import store from "./redux";

const useConfig = () => {
  return {
    useInterceptor,
    store,
  };
};

export default useConfig;