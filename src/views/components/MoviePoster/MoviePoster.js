import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import useControllers from '../../../controllers';

const MoviePoster = ({ movie, width = 250, height = 400 }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { useGeneralHooks } = useControllers();
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  return (
    <TouchableOpacity
      style={{ width, height, marginHorizontal: 7, ...styles.moviePosterContainer }}
      activeOpacity={0.75}
      onPress={() => navigateTo('DetailMovieScreen', movie)}
    >
      <View style={styles.moviePosterImageContainer}>
        <Image
          source={{ uri: posterUrl }}
          style={styles.moviePosterImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  moviePosterContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
  },
  moviePosterImageContainer: {
    flex: 1,
    borderRadius: 18,
  },
  moviePosterImage: {
    backgroundColor: '#C3C3C3',
    flex: 1,
    borderRadius: 18
  }
});
