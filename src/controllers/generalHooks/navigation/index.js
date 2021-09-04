import { useNavigation as useNavigationNative } from '@react-navigation/native';

const useNavigation = () => {

  const navigation = useNavigationNative();

  const navigateTo = (path, params) => {
    try {
      navigation.navigate(path, params);
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => navigation.goBack();

  return {
    navigateTo,
    goBack
  };
};

export default useNavigation;