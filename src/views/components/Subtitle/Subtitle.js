import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Subtitle = ({ text }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitleText}>{text}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 16,
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});