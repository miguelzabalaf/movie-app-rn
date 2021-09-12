import { useEffect, useRef } from "react";
import useHelpers from "../../../helpers";

const useHeader = (navigation) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { isIos, iamStayInScreen } = useQuickFunctions();

  const searchRef = useRef(null);

  const handleOnFocusInput = () => {
    navigation.navigate("SearchScreen");
  };

  useEffect(() => {
    iamStayInScreen("SearchScreen") && searchRef.current.focus();
  }, [iamStayInScreen("HomeScreen")]);

  return {
    handleOnFocusInput,
    isIos,
    iamStayInScreen,
    searchRef,
  };
};

export default useHeader;
