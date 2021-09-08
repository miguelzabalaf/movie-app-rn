import React from 'react';
import { View, Text, Modal, ScrollView, Platform, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import useControllers from '../../../controllers';

const ModalProfile = () => {

  const isIos = () => Platform.OS === 'ios';

  const { useComponentsHooks } = useControllers();
  const { useModalProfile } = useComponentsHooks();
  const {
    personSelected,
    handleShowModalOfInfoPerson,
    handleHideModalOfInfoPerson,
    getProfileUrlImg,
    getDateFormat,
    openUrl,
  } = useModalProfile();

  const { height } = Dimensions.get('screen');

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={handleShowModalOfInfoPerson()}
      onRequestClose={() => { }}
    >
      <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} style={styles.modalPersonInfoBackground}>
        <View style={{ ...styles.modalPersonInfoContainer, height: height * 0.5, margin: isIos() ? 16 : 0, borderRadius: isIos() ? 25 : 0 }}>
          <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.modalPersonInfoHeader}>
              <TouchableOpacity
                style={styles.modalPersonInfoHeaderButton}
                onPress={() => handleHideModalOfInfoPerson()}>
                <Icon
                  name={isIos() ? 'close-outline' : 'close-circle-outline'}
                  size={30}
                  color='#999'
                />
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.modalPersonInfoHero, height: height * 0.075 }}>
              <Image
                source={{ uri: getProfileUrlImg(personSelected) }}
                style={{
                  ...styles.modalPersonInfoHeroPhoto,
                  height: height * 0.05,
                  width: height * 0.05,
                  borderRadius: isIos() ? height * 0.015 : height * 0.05
                }} />
              <View style={styles.modalPersonInfoHeroTitle}>
                <Text numberOfLines={1} style={{ ...styles.modalPersonInfoHeroTitleName, fontSize: isIos() ? 20 : 25 }}>{personSelected.name}</Text>
                <Text numberOfLines={1} style={styles.modalPersonInfoHeroTitleDepartament}>{personSelected.known_for_department}</Text>
              </View>
            </View>
            <View style={styles.modalPersonInfoContent}>
              <Text style={styles.modalPersonInfoContentBiography}>{personSelected.biography || 'Biography not found.'}</Text>
            </View>
            <View style={styles.modalPersonInfoData}>
              {personSelected.place_of_birth && <View style={styles.modalPersonInfoDataGrid}>
                <Icon style={styles.modalPersonInfoDataGridIcon} name='location-outline' size={25} />
                <Text style={styles.modalPersonInfoDataGridText}>{personSelected.place_of_birth}</Text>
              </View>}
              {personSelected.birthday !== null && <View style={styles.modalPersonInfoDataGrid}>
                <Icon style={styles.modalPersonInfoDataGridIcon} name='calendar-outline' size={25} />
                <Text style={styles.modalPersonInfoDataGridText}>{getDateFormat(personSelected.birthday)}</Text>
              </View>}
              {personSelected.deathday !== null &&
                <View style={styles.modalPersonInfoDataGrid}>
                  <Icon style={styles.modalPersonInfoDataGridIcon} name='skull-outline' size={25} />
                  <Text style={styles.modalPersonInfoDataGridText}>{getDateFormat(personSelected.deathday)}</Text>
                </View>}
            </View>
            <View style={styles.modalPersonInfoFooter}>
              {personSelected.homepage &&
                <TouchableOpacity
                  activeOpacity={0.75}
                  style={styles.modalPersonInfoFooterButtonContainer}
                  onPress={() => openUrl(personSelected.homepage)}>
                  <LinearGradient
                    colors={['#FF3E3E', '#FF3E55']}
                    style={{ ...styles.modalPersonInfoFooterButton, borderRadius: isIos() ? 15 : 5 }}
                  >
                    <Text style={styles.modalPersonInfoFooterButtonText}>Website</Text>
                    <Icon color='#FFF' name='globe-outline' size={25} />
                  </LinearGradient>
                </TouchableOpacity>}
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default ModalProfile;

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