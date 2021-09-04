import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useNavigations from './src/navigations';
import useConfig from './src/config';
import { Provider } from 'react-redux';

const App = () => {

  const { RootNavigation } = useNavigations();
  const { useInterceptor, store } = useConfig();

  useInterceptor();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;