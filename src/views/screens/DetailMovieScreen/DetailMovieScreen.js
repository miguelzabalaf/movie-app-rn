import React from 'react';
import { StyleSheet, StatusBar, ScrollView, View, Text, TouchableOpacity, Platform, Image } from 'react-native';
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
  } = useDetailMovieScreen();

  const { average, progress } = getAverageAndProgress();

  const {
    MoviePosterDetail,
    MovieOverviewDetail,
    Subtitle,
  } = useComponents();

  const isIos = () => Platform.OS === 'ios';

  return (
    <ScrollView>
      <StatusBar backgroundColor='transparent' translucent={true} />
      <MoviePosterDetail
        genres={getGenresList()}
        movie={movie}
      />
      <MovieOverviewDetail
        overview={movie.overview}
        average={average}
        progress={progress}
        releaseYear={getReleaseYear()}
      />
      {/* Casting */}
      <View style={styles.CastContainer}>
        <Subtitle text='Cast' />
        <View style={styles.CastHeaderOptions}>
          <TouchableOpacity style={{ ...styles.CastHeaderOption, borderRadius: isIos() ? 25 : 5 }}>
            <Text style={styles.CastHeaderOptionText}>Option</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.CastHeaderOption, borderRadius: isIos() ? 25 : 5 }}>
            <Text style={styles.CastHeaderOptionText}>Option</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.CastHeaderOption, borderRadius: isIos() ? 25 : 5 }}>
            <Text style={styles.CastHeaderOptionText}>Option</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.CastProfilesContainer}>
          <View style={styles.CastProfile}>
            <Image style={{ width: 100, height: 100, backgroundColor: '#333', borderRadius: 50, marginBottom: 8 }} />
            <Text numberOfLines={1} style={styles.CastProfileTitle}>Miguel Zabala Figueroa</Text>
            <Text numberOfLines={1} style={styles.CastProfileSubtitle}>Spider-Man</Text>
          </View>
          <View style={styles.CastProfile}>
            <Image style={{ width: 100, height: 100, backgroundColor: '#333', borderRadius: 50, marginBottom: 8 }} />
            <Text numberOfLines={1} style={styles.CastProfileTitle}>Miguel Zabala Figueroa</Text>
            <Text numberOfLines={1} style={styles.CastProfileSubtitle}>Spider-Man</Text>
          </View>
          <View style={styles.CastProfile}>
            <Image style={{ width: 100, height: 100, backgroundColor: '#333', borderRadius: 50, marginBottom: 8 }} />
            <Text numberOfLines={1} style={styles.CastProfileTitle}>Miguel Zabala Figueroa</Text>
            <Text numberOfLines={1} style={styles.CastProfileSubtitle}>Spider-Man</Text>
          </View>
          <View style={styles.CastProfile}>
            <Image style={{ width: 100, height: 100, backgroundColor: '#333', borderRadius: 50, marginBottom: 8 }} />
            <Text numberOfLines={1} style={styles.CastProfileTitle}>Miguel Zabala Figueroa</Text>
            <Text numberOfLines={1} style={styles.CastProfileSubtitle}>Spider-Man</Text>
          </View>

        </View>
      </View>
      {/* Casting */}
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({
  CastContainer: {
    // borderColor: 'red',
    // borderWidth: 1
  },
  CastHeaderOptions: {
    // borderColor: 'blue',
    // borderWidth: 1,
    flexDirection: 'row'
  },
  CastHeaderOption: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 50,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 16
  },
  CastHeaderOptionText: {
    color: '#666',
  },
  CastProfilesContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  CastProfile: {
    // borderWidth: 1,
    // borderColor: 'blue',
    width: 100,
    height: 150,
    marginLeft: 16,
    alignItems: 'center'
  },
  CastProfileTitle: {
    color: '#FFF',
    marginBottom: 2
  },
  CastProfileSubtitle: {
    color: '#666',
    fontSize: 12
  },
});