import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useUtils from '../../../utils';

// Utils
const { useColors } = useUtils();
const { color } = useColors();

const ConsoleData = ({ data }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      stickyHeaderIndices={[0]}
      style={styles.consoleDataContainer}>
      <View style={styles.consoleDataHeader}>
        <Text style={styles.consoleDataHeaderTitle}>Console</Text>
      </View>
      <Text style={styles.consoleDataText}>{JSON.stringify(data, null, 3)}</Text>
    </ScrollView>
  );
};

export default ConsoleData;

const styles = StyleSheet.create({
  consoleDataContainer: {
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#333',
    paddingTop: 0,
    opacity: 0.85,
    borderRadius: 10,
    marginBottom: 100,
    minHeight: 300,
  },
  consoleDataHeader: {
    position: 'relative',
    backgroundColor: '#333',
    paddingVertical: 16

  },
  consoleDataHeaderTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: color.white
  },
  consoleDataText: {
    color: '#D5D5D5',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 16
  }
});