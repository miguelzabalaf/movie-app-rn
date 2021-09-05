import React from 'react';
import { ActivityIndicator, Button, Text, View, Dimensions, FlatList } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';
import useUtils from '../../../utils';
import { usePromiseTracker } from "react-promise-tracker";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {

  // Components
  const { ConsoleData, SpinnerLoader, MoviePoster } = useComponents();

  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useHomeScreen } = useScreenHooks();
  const { navigateTo, moviesNowPlaying } = useHomeScreen();

  // Loading? :)
  const { promiseInProgress } = usePromiseTracker();

  const { top } = useSafeAreaInsets();

  const { width } = Dimensions.get('window');

  const HomeScreenComponent = () => {
    return (
      <View style={{ marginTop: top + 20 }}>
        {/* Principal Carousel */}
        <View style={{ height: 440 }}>
          <Carousel
            data={moviesNowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={width}
            itemWidth={250}
          />
        </View>

        {/* Popular Movies Carousel */}
        <View style={{ backgroundColor: 'red', height: 250 }}>
          <Text>Popular Movies</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={moviesNowPlaying}
            renderItem={(({ item }) => (
              <MoviePoster movie={item} width={150} height={200} />
            ))}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  };

  return promiseInProgress
    ? <SpinnerLoader />
    : <HomeScreenComponent />;

};

export default HomeScreen;