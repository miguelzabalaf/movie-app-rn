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
    departaments,
    departamentSelected,
    setDepartamentSelected,
    getCreditFilteredByDepartamentSelected,
    goToHomeScreen,
  } = useDetailMovieScreen();

  const { average, progress } = getAverageAndProgress();

  const {
    MoviePosterDetail,
    MovieOverviewDetail,
    Subtitle,
  } = useComponents();

  const isIos = () => Platform.OS === 'ios';

  const isDepartamentSelected = (departament) => {
    return departament === departamentSelected;
  };
  const getProfileUrlImg = (item) => {
    return `https://image.tmdb.org/t/p/w500${item.profile_path}`;
  };

  const castListRef = React.useRef();

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
      <View style={styles.CastContainer}>
        <Subtitle text='Cast' />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.CastHeaderOptions}
          data={departaments}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setDepartamentSelected(item);
                castListRef.current.scrollToOffset({ animated: true, offset: 0 });
              }}
              style={{
                ...styles[isDepartamentSelected(item) ? 'CastHeaderOptionSelected' : 'CastHeaderOption'],
                borderRadius: isIos() ? 25 : 5
              }}>
              <Text
                style={
                  styles[isDepartamentSelected(item) ? 'CastHeaderOptionTextSelected' : 'CastHeaderOptionText']
                }
              >{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, idx) => `${item}${idx}`}
        >
        </FlatList>

        <FlatList
          ref={castListRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.CastProfilesContainer}
          data={getCreditFilteredByDepartamentSelected()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.CastProfile}>
              <Image
                style={{ width: 75, height: 75, backgroundColor: '#333', borderRadius: 50, marginBottom: 8 }}
                source={{
                  uri: getProfileUrlImg(item)
                }}
              />
              <Text numberOfLines={1} style={styles.CastProfileTitle}>{item.original_name}</Text>
              <Text numberOfLines={1} style={styles.CastProfileSubtitle}>{item.character}</Text>
            </TouchableOpacity>
          )}
          key={(item) => item.id.toString()}
        >
        </FlatList>
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
  CastHeaderOptionSelected: {
    borderWidth: 1,
    borderColor: '#FF3E3E',
    backgroundColor: '#FF3E3E',
    borderRadius: 50,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 16
  },
  CastHeaderOptionText: {
    color: '#666',
  },
  CastHeaderOptionTextSelected: {
    color: '#FFF',
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