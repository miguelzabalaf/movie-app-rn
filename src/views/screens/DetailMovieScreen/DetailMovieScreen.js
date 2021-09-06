import React from 'react';
import { Text, View } from 'react-native';
import useControllers from '../../../controllers';

const DetailMovieScreen = () => {

  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const { movie } = useDetailMovieScreen();

  return (
    <View>
      <Text style={{ fontSize: 50 }}>{movie.title}</Text>
    </View>
  );
};

export default DetailMovieScreen;
