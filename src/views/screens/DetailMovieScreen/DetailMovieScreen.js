import React from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';

const DetailMovieScreen = () => {

  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const { movie, getGenresList } = useDetailMovieScreen();

  const { MoviePosterDetail } = useComponents();

  return (
    <ScrollView>
      <StatusBar backgroundColor='transparent' translucent={true} />
      <MoviePosterDetail genres={getGenresList()} movie={movie} />
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({

});