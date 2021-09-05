import useActions from "./actions";
import useProviders from "./providers";

const useApi = () => {
  return {
    useProviders,
    useActions,
  };
};

export default useApi;