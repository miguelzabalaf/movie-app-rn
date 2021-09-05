import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';
import { usePromiseTracker } from "react-promise-tracker";
import useUtils from '../../../utils';


const HomeScreen = () => {

  // Components
  const { ConsoleData, SpinnerLoader } = useComponents();

  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useHomeScreen } = useScreenHooks();
  const { navigateTo, moviesNowPlaying } = useHomeScreen();

  // Loading? :)
  const { promiseInProgress } = usePromiseTracker();

  const HomeScreenComponent = () => {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title='Navigate to Details' onPress={() => navigateTo('DetailMovieScreen')} />
        <ConsoleData data={moviesNowPlaying} />
      </View>
    );
  };

  return promiseInProgress
    ? <SpinnerLoader />
    : <HomeScreenComponent />;

};

export default HomeScreen;