import { Platform } from "react-native";

const useQuickFunctions = () => {

  const isIos = () => Platform.OS === 'ios';

  const getImgUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

  return {
    isIos,
    getImgUrl,
  };
};

export default useQuickFunctions;