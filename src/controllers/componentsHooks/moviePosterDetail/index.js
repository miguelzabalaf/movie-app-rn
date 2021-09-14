import { useRef, useState } from "react";
import { Animated } from "react-native";

const useMoviePosterDetail = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const [isFavorite, setIsFavorite] = useState(false);

  const applyScaleAnimation = () => {
    setIsFavorite(!isFavorite);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.25,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {
    applyScaleAnimation,
    scaleAnim,
    isFavorite,
  };
};

export default useMoviePosterDetail;
