import React from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';
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
    goToHomeScreen,
  } = useDetailMovieScreen();

  const { average, progress } = getAverageAndProgress();

  const {
    MoviePosterDetail,
    MovieOverviewDetail,
    MovieCastSection,
    HorizontalMovieSlider,
    ModalProfile
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
      <MovieCastSection />
      <ModalProfile />
      <HorizontalMovieSlider data={[]} title='Recommendations' />
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({

});