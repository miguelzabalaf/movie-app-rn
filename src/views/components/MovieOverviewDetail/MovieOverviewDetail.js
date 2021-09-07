import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieOverviewDetail = ({ overview, average, progress, releaseYear }) => {
  return (
    <View style={styles.overviewContainer}>
      <View style={styles.overviewTextContainer}>
        <Text style={styles.overviewYear}>{releaseYear}</Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>
      <View style={styles.overviewAverage}>
        <Text style={styles.overviewAveragePorcent}>{average}</Text>
        <Text style={styles.overviewAverageTitle}>Average</Text>
        <View style={styles.overviewAverageBar}>
          <View style={{ ...styles.overviewAverageProgress, width: progress }}></View>
        </View>
      </View>
    </View>
  );
};

export default MovieOverviewDetail;

const styles = StyleSheet.create({
  overviewContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginBottom: 16
  },
  overviewTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  overviewText: {
    color: '#C3C3C3',
    fontSize: 13
  },
  overviewYear: {
    fontSize: 10,
    color: '#666',
    marginBottom: 5
  },
  overviewAverage: {
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  overviewAveragePorcent: {
    color: '#FF3E3E',
    fontWeight: 'bold',
    fontSize: 30
  },
  overviewAverageTitle: {
    color: '#666',
    fontSize: 10
  },
  overviewAverageBar: {
    width: 50,
    height: 5,
    backgroundColor: '#666',
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  overviewAverageProgress: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: 5,
  }
});