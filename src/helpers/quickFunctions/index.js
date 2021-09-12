import { Platform } from "react-native";
import { useNavigationState } from "@react-navigation/core";

const useQuickFunctions = () => {
  const isIos = () => Platform.OS === "ios";

  const getImgUrl = (path) => {
    return path !== null
      ? `https://image.tmdb.org/t/p/w500${path}`
      : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  };

  const stateNav = useNavigationState((state) => state);
  const routes = stateNav.routes;
  const actualScreen = routes[routes.length - 1].name;
  const iamStayInScreen = (nameScreen) => {
    return actualScreen === nameScreen;
  };

  return {
    isIos,
    getImgUrl,
    iamStayInScreen,
  };
};

export default useQuickFunctions;
