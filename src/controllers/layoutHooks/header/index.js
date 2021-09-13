import { useEffect, useRef, useState } from "react";
import useControllers from "../..";
import useHelpers from "../../../helpers";

const useHeader = (navigation) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { isIos, iamStayInScreen } = useQuickFunctions();

  // Controllers
  const { useGeneralHooks } = useControllers();
  const { useDebouncedValue } = useGeneralHooks();

  const [searchValue, setSearchValue] = useState("");
  const { debouncedValue } = useDebouncedValue(searchValue, 1500);

  useEffect(() => {
    // console.log(debouncedValue);
  }, [debouncedValue]);

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
    debouncedValue,
    setSearchValue,
    searchValue,
  };
};

export default useHeader;
