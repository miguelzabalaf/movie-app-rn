import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import useControllers from '../../../controllers';

const MoviePoster = ({ movie, width = 250, height = 400 }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const isIos = () => Platform.OS === 'ios';

  // Controllers
  const { useComponentsHooks } = useControllers();
  const { useMoviePoster } = useComponentsHooks();
  const { navigateAndSetMovieSelected } = useMoviePoster(movie);

  return (
    <TouchableOpacity
      style={{
        width,
        height,
        ...styles.moviePosterContainer
      }}
      activeOpacity={0.75}
      onPress={() => navigateAndSetMovieSelected()}
    >
      <View style={{ ...styles.moviePosterImageContainer }}>
        <Image
          source={{ uri: posterUrl }}
          style={{ ...styles.moviePosterImage, borderRadius: isIos() ? 18 : 5, }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  moviePosterContainer: {
    shadowColor: "#000",
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 5
  },
  moviePosterImageContainer: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 5,
    flex: 1,
  },
  moviePosterImage: {
    backgroundColor: '#C3C3C3',
    flex: 1,
  }
});
