import React from 'react';
import { Button, Text, View } from 'react-native';
import useControllers from '../../../controllers';

const HomeScreen = () => {

  const { useGeneralHooks } = useControllers();
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Navigate to Details' onPress={() => navigateTo('DetailMovieScreen')} />
    </View>
  );
};

export default HomeScreen;