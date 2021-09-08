import React, { useRef } from 'react';
import { StyleSheet, StatusBar, ScrollView, View, Text, TouchableOpacity, Platform, Image, FlatList } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';

const DetailMovieScreen = () => {

  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const {
    movie,
    getGenresList,
    getReleaseYear,
    getAverageAndProgress,
    departamentSelected,
    goToHomeScreen,
  } = useDetailMovieScreen();

  const { average, progress } = getAverageAndProgress();

  const {
    MoviePosterDetail,
    MovieOverviewDetail,
    MovieCastSection,
  } = useComponents();

  return (
    <ScrollView>
      <StatusBar backgroundColor='transparent' translucent={true} />
      <MoviePosterDetail
        genres={getGenresList()}
        movie={movie}
        goBack={goToHomeScreen}
      />
      <MovieOverviewDetail
        overview={movie.overview}
        average={average}
        progress={progress}
        releaseYear={getReleaseYear()}
      />
      {/* Casting */}
      <MovieCastSection />
      {/* Casting */}
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({

});