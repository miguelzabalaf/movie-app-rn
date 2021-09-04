import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import useApi from '../../../api';
import useControllers from '../../../controllers';
import useModels from '../../../models';

const HomeScreen = () => {

  // Controllers
  const { useGeneralHooks } = useControllers();
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // API
  const { useProviders } = useApi();
  const { useMovieProviders } = useProviders();
  const { getMoviesNowPlayingProvider } = useMovieProviders();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { moviesNowPlayingSelector } = useMovieSelectors();
  const moviesNowPlaying = useSelector(moviesNowPlayingSelector);


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