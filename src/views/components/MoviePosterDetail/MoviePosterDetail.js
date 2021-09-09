import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const MoviePosterDetail = ({ genres, movie, goBack }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  const isIos = () => Platform.OS === 'ios';

  const genreItem = ({ item }) => (
    <View style={{ borderRadius: isIos() ? 15 : 5, ...styles.moviePosterDetailGenresContainer, }}>
      <Text style={styles.moviePosterDetailGenresText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.moviePosterDetailContainer}>
      <Image
        style={styles.moviePosterDetailImage}
        source={{ uri: posterUrl }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'rgba(17, 17, 17, 1)']}
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
      <View style={styles.moviePosterDetailHeader}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => goBack()}
          style={styles.moviePosterDetailHeaderButton}
        >
          <Icon
            name={isIos() ? 'chevron-back-outline' : 'arrow-back-outline'}
            size={25}
            color='#FFF'
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.moviePosterDetailHeaderButton}
          onPress={() => alert('Hola')}>
          <Icon name={'heart-outline'} size={25} color='#FFF' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoviePosterDetail;

const styles = StyleSheet.create({
  moviePosterDetailContainer: {
    height: 250,
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
    paddingVertical: 10,
  },
  moviePosterDetailGenresContainer: {
    backgroundColor: '#333',
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 10,
    justifyContent: 'center',
  },
  moviePosterDetailGenresText: {
    color: '#AFAFAF',
    fontSize: 10
  },
  moviePosterDetailHeader: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
    left: 0,
    top: 30,
    height: 75,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moviePosterDetailHeaderButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  }
});