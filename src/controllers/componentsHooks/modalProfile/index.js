import useModels from "../../../models";
import _ from 'lodash';
import useApi from "../../../api";
import { Linking } from "react-native";

const useModalProfile = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { infoPersonSelectedSelector } = useMovieSelectors();
  const personSelected = useSelector(infoPersonSelectedSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actRemoveInfoPerson } = useMovieActions();

  const handleShowModalOfInfoPerson = () => personSelected?.id ? true : false;

  const handleHideModalOfInfoPerson = () => dispatch(actRemoveInfoPerson());

  const getProfileUrlImg = (item) => {
    return `https://image.tmdb.org/t/p/w500${item.profile_path}`;
  };

  const getDateFormat = (date) => {
    const dateFormat = new Date(date);
    return `${dateFormat.getDay()}/${dateFormat.getMonth()}/${dateFormat.getFullYear()}`;
  };

  const openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
      supported && Linking.openURL(url);
    });
  };

  return {
    personSelected,
    handleShowModalOfInfoPerson,
    handleHideModalOfInfoPerson,
    getProfileUrlImg,
    getDateFormat,
    openUrl,
  };
};

export default useModalProfile;