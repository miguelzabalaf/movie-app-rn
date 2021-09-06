import useActions from "./actions";
import useProviders from "./providers";
import useServices from "./services";

const useApi = () => {
  return {
    useProviders,
    useActions,
    useServices,
  };
};

export default useApi;