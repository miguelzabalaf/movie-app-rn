import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useUtils from '../../../utils';

const Subtitle = ({ text }) => {

  const { useColors } = useUtils();
  const { color } = useColors();

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