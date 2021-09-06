import React from 'react';
import { ActivityIndicator } from 'react-native';
import useUtils from '../../../utils';

const SpinnerLoader = () => {

  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();

  return (
    <ActivityIndicator color={color.primary} size={25} style={{ flex: 1 }} />
  );
};

export default SpinnerLoader;
