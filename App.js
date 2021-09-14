import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import useNavigations from "./src/navigations";
import useConfig from "./src/config";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import useUtils from "./src/utils";

const App = () => {
  const { RootNavigation } = useNavigations();
  const { useInterceptor, useStoreConfig, useLogBox } = useConfig();
  const { store, persistor } = useStoreConfig();
  const { useColors } = useUtils();
  const { color } = useColors();
  useInterceptor();
  useLogBox();

  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: color.primary,
          background: color.background,
          card: color.textMuted,
          text: color.white,
          border: color.textMuted,
          notification: color.white,
        },
      }}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
