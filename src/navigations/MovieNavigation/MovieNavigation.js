import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import useViews from "../../views";

const Root = createStackNavigator();

const MovieNavigation = () => {
  // useViews
  const { useScreens, useLayouts } = useViews();
  const { HomeScreen, DetailMovieScreen } = useScreens();
  const { Header } = useLayouts();

  return (
    <Root.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Root.Screen
        name="HomeScreen"
        options={{ header: (props) => <Header {...props} /> }}
        component={HomeScreen}
      />
      <Root.Screen
        name="DetailMovieScreen"
        options={{ headerShown: false }}
        component={DetailMovieScreen}
      />
    </Root.Navigator>
  );
};

export default MovieNavigation;
