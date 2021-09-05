import React from 'react';
import { Button, Text, View } from 'react-native';
import useViews from '../..';
import useControllers from '../../../controllers';

const HomeScreen = () => {

  // Views
  const { useComponents } = useViews();
  const { ConsoleData } = useComponents();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useHomeScreen } = useScreenHooks();
  const { navigateTo, moviesNowPlaying } = useHomeScreen();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Navigate to Details' onPress={() => navigateTo('DetailMovieScreen')} />
      <ConsoleData data={moviesNowPlaying} />
    </View>
  );
};

export default HomeScreen;