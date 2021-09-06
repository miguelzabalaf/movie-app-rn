import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import useControllers from '../../../controllers';
import LinearGradient from 'react-native-linear-gradient';

const DetailMovieScreen = () => {

  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const { movie } = useDetailMovieScreen();

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { width, height } = Dimensions.get('window');

  return (
    <View>
      <View style={{ height: height * 0.5, ...styles.moviePosterDetailContainer }}>
        <Image
          style={styles.moviePosterDetailImage}
          source={{
            uri: posterUrl
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
          style={styles.moviePosterDetailFooter}>
          <View style={styles.moviePosterDetailTitleContainer}>
            <Text numberOfLines={1} style={styles.moviePosterDetailTitleText}>{movie.title}</Text>
          </View>
        </LinearGradient>

      </View>
    </View>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({
  moviePosterDetailContainer: {
    borderWidth: 5,
  },
  moviePosterDetailImage: {
    flex: 1,
    backgroundColor: '#C3C3C3',
  },
  moviePosterDetailFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '100%'
  },
  moviePosterDetailTitleContainer: {
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    padding: 16
  },
  moviePosterDetailTitleText: {
    fontSize: 25,
    color: 'white',
    fontWeight: '700'
  }
});