import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import useNavigations from './src/navigations';
import useConfig from './src/config';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

const App = () => {

  const { RootNavigation } = useNavigations();
  const { useInterceptor, useStoreConfig, useLogBox } = useConfig();
  const { store, persistor } = useStoreConfig();

  useInterceptor();
  useLogBox();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;