import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useUtils from '../../utils';
import useViews from '../../views';

const Root = createStackNavigator();

const RootNavigation = () => {

  // useViews
  const { useScreens } = useViews();
  const { HomeScreen, DetailMovieScreen } = useScreens();

  // useUtils
  const { useColors } = useUtils();
  const { color } = useColors();

  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: color.white
        },
      }}
    >
      <Root.Screen name="HomeScreen" component={HomeScreen} />
      <Root.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
    </Root.Navigator>
  );
};

export default RootNavigation;