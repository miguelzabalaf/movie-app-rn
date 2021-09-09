import React from 'react';
import { ActivityIndicator } from 'react-native';
import useUtils from '../../../utils';

const SpinnerLoader = () => {

  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();

  return (
    <ActivityIndicator color={color.primary} size={25} style={{
      position: 'absolute',
      zIndex: 5,
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(17, 17, 17, 0.5)'
    }} />
  );
};

export default SpinnerLoader;
