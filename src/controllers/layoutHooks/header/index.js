import { useEffect, useRef, useState } from "react";
import useApi from "../../../api";
import useHelpers from "../../../helpers";
import useGeneralHooks from "../../generalHooks";

const useHeader = (navigation) => {
  // Api
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actSearchMoviesByQuery } = useMovieActions();
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { isIos, iamStayInScreen } = useQuickFunctions();

  // Controllers
  const { useDebouncedValue } = useGeneralHooks();

  const [searchValue, setSearchValue] = useState("");
  const { debouncedValue } = useDebouncedValue(searchValue, 750);

  useEffect(() => {
    searchByQuery();
  }, [debouncedValue]);

  const searchByQuery = () => {
    if (iamStayInScreen("SearchScreen")) {
      debouncedValue && dispatch(actSearchMoviesByQuery(debouncedValue));
    }
  };

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
