import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useNavigations from './src/navigations';
import useConfig from './src/config';

const App = () => {

  const { RootNavigation } = useNavigations();
  const { useInterceptor } = useConfig();

  useInterceptor();

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;