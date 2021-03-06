import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import useControllers from '../../../controllers';
import useHelpers from '../../../helpers';

const MoviePoster = ({ movie, width = 250, height = 400 }) => {

  // Quick Functions
  const { useQuickFunctions } = useHelpers();
  const { getImgUrl, isIos } = useQuickFunctions();

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
          source={{ uri: getImgUrl(movie.poster_path) }}
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
    paddingBottom: 10,
    marginLeft: 16,

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
