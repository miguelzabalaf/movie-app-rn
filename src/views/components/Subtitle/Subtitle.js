import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Subtitle = ({ text }) => {

  return (
    <View accessible={true} style={{ ...styles.subtitleContainer }}>
      <Text style={{ ...styles.subtitleText, color: 'white' }}>{text}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 16,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});