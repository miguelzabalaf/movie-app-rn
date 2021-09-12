import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import useViews from "../../views";

const MovieNavigationStack = createStackNavigator();

const MovieNavigation = () => {
  // useViews
  const { useScreens, useLayouts } = useViews();
  const { HomeScreen, DetailMovieScreen, SearchScreen } = useScreens();
  const { Header } = useLayouts();

  return (
    <MovieNavigationStack.Navigator
      screenOptions={{
        headerShown: true,
        header: (props) => <Header {...props} />,
      }}
    >
      <MovieNavigationStack.Screen name="HomeScreen" component={HomeScreen} />
      <MovieNavigationStack.Screen name="SearchScreen" component={SearchScreen} />
      <MovieNavigationStack.Screen
        name="DetailMovieScreen"
        options={{ headerShown: false }}
        component={DetailMovieScreen}
      />
    </MovieNavigationStack.Navigator>
  );
};

export default MovieNavigation;
