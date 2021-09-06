import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MoviePosterDetail = ({ genres, movie }) => {

  const { height } = Dimensions.get('window');

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const genreItem = ({ item }) => (
    <View style={styles.moviePosterDetailGenresContainer}>
      <Text style={styles.moviePosterDetailGenresText}>{item.name}</Text>
    </View>
  );

  return (
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
          <FlatList
            style={styles.moviePosterDetailGenres}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={genres}
            renderItem={genreItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </LinearGradient>

    </View>
  );
};

export default MoviePosterDetail;

const styles = StyleSheet.create({
  moviePosterDetailContainer: {

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
  },
  moviePosterDetailGenres: {
    position: 'relative',
    right: 0,
    left: 0,
    paddingVertical: 6
  },
  moviePosterDetailGenresContainer: {
    backgroundColor: '#333',
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 10,
    justifyContent: 'center',
    borderRadius: 5,
  },
  moviePosterDetailGenresText: {
    color: '#AFAFAF',
    fontSize: 10
  }
});