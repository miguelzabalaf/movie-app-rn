import { useEffect, useState } from "react";
import useModels from "../../../models";
import _ from 'lodash';
import useApi from "../../../api";

const useMovieCastSection = () => {

  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieCreditsSelector } = useMovieSelectors();
  const { departaments, credits } = useSelector(movieCreditsSelector);

  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetInfoPerson } = useMovieActions();

  const [departamentSelected, setDepartamentSelected] = useState(departaments[0]);

  useEffect(() => {
    setInitialDepartamentCastSelected();
  }, [credits]);

  const setInitialDepartamentCastSelected = () => setDepartamentSelected(departaments[0]);

  const getCreditFilteredByDepartamentSelected = () => {
    return _.filter(credits, (credit) => credit.known_for_department === departamentSelected);
  };

  const isDepartamentSelected = (departament) => {
    return departament === departamentSelected;
  };

  const getProfileUrlImg = (item) => {
    return `https://image.tmdb.org/t/p/w500${item.profile_path}`;
  };

  const handleSetNewDepartamentSelected = (item) => {
    setDepartamentSelected(item);
  };

  const handleGetInfoPerson = (person) => {
    dispatch(actGetInfoPerson(person.id));
  };

  const setStylesFromDepartamentOptions = (styles, item, isIos) => {
    return {
      ...styles[isDepartamentSelected(item)
        ? 'CastHeaderOptionSelected'
        : 'CastHeaderOption'],
      borderRadius: isIos() ? 25 : 5
    };
  };

  const setStylesFromDepartamentOptionsText = (styles, item) => {
    return styles[
      isDepartamentSelected(item)
        ? 'CastHeaderOptionTextSelected'
        : 'CastHeaderOptionText'
    ];
  };


  return {
    departaments,
    getProfileUrlImg,
    getCreditFilteredByDepartamentSelected,
    handleSetNewDepartamentSelected,
    setStylesFromDepartamentOptions,
    setStylesFromDepartamentOptionsText,
    handleGetInfoPerson,
  };
};

export default useMovieCastSection;