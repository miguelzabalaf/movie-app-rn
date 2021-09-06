import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';

const DetailMovieScreen = () => {

  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const { movie, getGenresList } = useDetailMovieScreen();

  const { MoviePosterDetail } = useComponents();

  return (
    <View>
      <StatusBar backgroundColor='transparent' translucent={true} />
      <MoviePosterDetail genres={getGenresList()} movie={movie} />
    </View>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({

});