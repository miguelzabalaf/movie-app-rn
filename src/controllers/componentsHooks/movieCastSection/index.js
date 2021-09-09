import { useEffect, useRef, useState } from "react";
import useModels from "../../../models";
import _ from 'lodash';
import useApi from "../../../api";
import { Animated } from "react-native";

const useMovieCastSection = () => {

  // Selectors
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { movieCreditsSelector } = useMovieSelectors();
  const { departaments, credits } = useSelector(movieCreditsSelector);

  // Actions
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetInfoPerson } = useMovieActions();

  const [departamentSelected, setDepartamentSelected] = useState('');

  const [actualPeopleFiltered, setActualPeopleFiltered] = useState([]);

  useEffect(() => {
    // !departamentSelected && setInitialDepartamentCastSelected();
    setInitialDepartamentCastSelected();
  }, [credits]);

  useEffect(() => {
    handleSetPeopleFilteredByDepartamentSelected();
  }, [departamentSelected, credits]);

  const setInitialDepartamentCastSelected = () => setDepartamentSelected(departaments[0]);

  const handleSetPeopleFilteredByDepartamentSelected = () => {
    const dataFiltered = _.filter(credits, (credit) => credit.known_for_department === departamentSelected);
    setActualPeopleFiltered(dataFiltered);
  };

  const isDepartamentSelected = (departament) => {
    return departament === departamentSelected;
  };

  const getProfileUrlImg = (item) => {
    return `https://image.tmdb.org/t/p/w500${item.profile_path}`;
  };

  const handleSetNewDepartamentSelected = (item) => {
    setDepartamentSelected(item);
    resetOpacityPerson();
    fadeInPerson();
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

  // Animations
  const opacityPerson = useRef(new Animated.Value(0)).current;

  const fadeInPerson = () => {
    Animated.timing(
      opacityPerson, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }
    ).start();
  };

  const resetOpacityPerson = () => opacityPerson.setValue(0);

  return {
    departaments,
    getProfileUrlImg,
    actualPeopleFiltered,
    handleSetNewDepartamentSelected,
    setStylesFromDepartamentOptions,
    setStylesFromDepartamentOptionsText,
    handleGetInfoPerson,
    // Animations
    opacityPerson,
    fadeInPerson,
  };
};

export default useMovieCastSection;