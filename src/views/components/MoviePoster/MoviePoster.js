import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MoviePoster = ({ movie, width = 250, height = 400 }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{ width, height, marginHorizontal: 7 }}>
      <View style={styles.moviePosterImageContainer}>
        <Image
          source={{ uri: posterUrl }}
          style={styles.moviePosterImage}
        />
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  moviePosterImageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5.84,
    elevation: 5,
  },
  moviePosterImage: {
    flex: 1,
    borderRadius: 18
  }
});
