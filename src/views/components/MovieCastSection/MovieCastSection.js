import React from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import useControllers from '../../../controllers';
import Subtitle from '../Subtitle';

const MovieCastSection = () => {

  const isIos = () => Platform.OS === 'ios';

  const { useComponentsHooks } = useControllers();
  const { useMovieCastSection } = useComponentsHooks();

  const {
    departaments,
    getProfileUrlImg,
    getCreditFilteredByDepartamentSelected,
    castListRef,
    handleSetNewDepartamentSelected,
    setStylesFromDepartamentOptions,
    setStylesFromDepartamentOptionsText,
  } = useMovieCastSection();

  const RenderOptionCastHeader = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleSetNewDepartamentSelected(item)}
        style={setStylesFromDepartamentOptions(styles, item, isIos)}>
        <Text style={setStylesFromDepartamentOptionsText(styles, item)}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const RenderProfile = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.CastProfile}>
        <Image style={styles.CastProfileImage} source={{ uri: getProfileUrlImg(item) }} />
        <Text numberOfLines={1} style={styles.CastProfileTitle}>{item.original_name}</Text>
        <Text numberOfLines={1} style={styles.CastProfileSubtitle}>{item.character}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.CastContainer}>
      <Subtitle text='Cast' />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.CastHeaderOptions}
        data={departaments}
        renderItem={({ item }) => <RenderOptionCastHeader item={item} />}
        keyExtractor={(item, idx) => `${item}${idx}`}
      >
      </FlatList>

      <FlatList
        ref={castListRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.CastProfilesContainer}
        data={getCreditFilteredByDepartamentSelected()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RenderProfile item={item} />}
      >
      </FlatList>
    </View>
  );
};

export default MovieCastSection;

const styles = StyleSheet.create({
  CastContainer: {

  },
  CastHeaderOptions: {
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
    paddingVertical: 16,
    flexDirection: 'row',
  },
  CastProfile: {
    width: 100,
    height: 150,
    marginLeft: 16,
    alignItems: 'center'
  },
  CastProfileImage: {
    width: 75,
    height: 75,
    backgroundColor: '#333',
    borderRadius: 50,
    marginBottom: 8,
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