import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useScreens from '../../views/screens';
import useUtils from '../../utils';

const Root = createStackNavigator();

const RootNavigation = () => {

  const { HomeScreen, DetailMovieScreen } = useScreens();
  const { useColors } = useUtils();
  const { color } = useColors();

  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: color.white
        }
      }}
    >
      <Root.Screen name="HomeScreen" component={HomeScreen} />
      <Root.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
    </Root.Navigator>
  );
};

export default RootNavigation;