import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import useApi from '../../../api';
import useControllers from '../../../controllers';

const HomeScreen = () => {

  // Controllers
  const { useGeneralHooks } = useControllers();
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // API
  const { useProviders } = useApi();
  const { useMovieProviders } = useProviders();
  const { getMoviesNowPlayingProvider } = useMovieProviders();

  useEffect(() => {
    // getMoviesNowPlayingProvider()
    //   .then(() => {
    //     // console.log(JSON.stringify(data.data, null, 4));
    //     console.log('RESP OK');
    //   })
    //   .catch(err => console.error(err));
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Navigate to Details' onPress={() => navigateTo('DetailMovieScreen')} />
    </View>
  );
};

export default HomeScreen;