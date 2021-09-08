import React from 'react';
import { StyleSheet, StatusBar, ScrollView, View, Modal, Text, Dimensions, Platform, Button, TouchableOpacity } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailMovieScreen = () => {

  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const {
    movie,
    getGenresList,
    getReleaseYear,
    getAverageAndProgress,
    goToHomeScreen,
  } = useDetailMovieScreen();

  const { average, progress } = getAverageAndProgress();

  const {
    MoviePosterDetail,
    MovieOverviewDetail,
    MovieCastSection,
  } = useComponents();

  const { height } = Dimensions.get('screen');

  const isIos = () => Platform.OS === 'ios';

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
      <MovieCastSection />
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
        onRequestClose={() => { }}
      >
        <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} style={styles.modalPersonInfoBackground}>
          <View style={{ ...styles.modalPersonInfoContainer, height: height * 0.5, margin: isIos() ? 16 : 0, borderRadius: isIos() ? 25 : 0 }}>
            <ScrollView
              stickyHeaderIndices={[0]}
            >
              <View style={styles.modalPersonInfoHeader}>
                <TouchableOpacity style={styles.modalPersonInfoHeaderButton}>
                  <Icon
                    name={isIos() ? 'close-outline' : 'close-circle-outline'}
                    size={30}
                    color='#999'
                  />
                </TouchableOpacity>
              </View>
              <View style={{ ...styles.modalPersonInfoHero, height: height * 0.075 }}>
                <View style={{ ...styles.modalPersonInfoHeroPhoto, height: height * 0.05, width: height * 0.05, borderRadius: isIos() ? height * 0.015 : height * 0.05 }}></View>
                <View style={styles.modalPersonInfoHeroTitle}>
                  <Text numberOfLines={1} style={{ ...styles.modalPersonInfoHeroTitleName, fontSize: isIos() ? 20 : 25 }}>Miguel Zabala Figueroa</Text>
                  <Text numberOfLines={1} style={styles.modalPersonInfoHeroTitleDepartament}>Production</Text>
                </View>
              </View>
              <View style={styles.modalPersonInfoContent}>
                <Text style={styles.modalPersonInfoContentBiography} numberOfLines={5}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </View>
              <View style={styles.modalPersonInfoData}>
                <View style={styles.modalPersonInfoDataGrid}>
                  <Icon style={styles.modalPersonInfoDataGridIcon} name='location-outline' size={25} />
                  <Text style={styles.modalPersonInfoDataGridText}>Barranquilla</Text>
                </View>
                <View style={styles.modalPersonInfoDataGrid}>
                  <Icon style={styles.modalPersonInfoDataGridIcon} name='calendar-outline' size={25} />
                  <Text style={styles.modalPersonInfoDataGridText}>25 de Marzo</Text>
                </View>
                <View style={styles.modalPersonInfoDataGrid}>
                  <Icon style={styles.modalPersonInfoDataGridIcon} name='skull-outline' size={25} />
                  <Text style={styles.modalPersonInfoDataGridText}>1999</Text>
                </View>
              </View>
              <View style={styles.modalPersonInfoFooter}>
                <TouchableOpacity activeOpacity={0.75} style={styles.modalPersonInfoFooterButtonContainer}>
                  <LinearGradient
                    colors={['#FF3E3E', '#FF3E55']}
                    style={{ ...styles.modalPersonInfoFooterButton, borderRadius: isIos() ? 15 : 5 }}
                  >
                    <Text style={styles.modalPersonInfoFooterButtonText}>Website</Text>
                    <Icon color='#FFF' name='globe-outline' size={25} />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
      </Modal>
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({
  modalPersonInfoBackground: {
    flex: 1,
  },
  modalPersonInfoContainer: {
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden'
  },
  modalPersonInfoHeader: {
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: '#222',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  modalPersonInfoHeaderButton: {
    alignSelf: 'flex-end'
  },
  modalPersonInfoHero: {
    // borderWidth: 1,
    // borderColor: 'white',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalPersonInfoHeroPhoto: {
    backgroundColor: '#666',
    marginRight: 16
  },
  modalPersonInfoHeroTitle: {
    // borderColor: 'green',
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  modalPersonInfoHeroTitleName: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 0
  },
  modalPersonInfoHeroTitleDepartament: {
    color: '#666',
    fontSize: 15,
    fontWeight: '400',
  },
  modalPersonInfoContent: {
    // borderColor: 'red',
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  modalPersonInfoContentBiography: {
    color: '#C3C3C3'
  },
  modalPersonInfoData: {
    // borderWidth: 1,
    // borderColor: 'red',
    paddingHorizontal: 16,
    flexDirection: 'row'
  },
  modalPersonInfoDataGrid: {
    // borderWidth: 1,
    // borderColor: 'white',
    flex: 1,
    height: 100,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalPersonInfoDataGridIcon: {
    color: '#DDD',
    flex: 2
  },
  modalPersonInfoDataGridText: {
    color: '#DDD',
    fontSize: 12,
    flex: 1
  },
  modalPersonInfoFooter: {
    // borderColor: 'red',
    // borderWidth: 1,
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  modalPersonInfoFooterButtonContainer: {
  },
  modalPersonInfoFooterButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flex: 1
  },
  modalPersonInfoFooterButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600'
  },
});