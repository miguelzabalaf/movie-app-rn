import React from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import useControllers from '../../../controllers';
import useComponents from '../../components';
import useUtils from '../../../utils';
import { usePromiseTracker } from "react-promise-tracker";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {

  // Components
  const {
    SpinnerLoader,
    MoviePoster,
    HorizontalMovieSlider,
  } = useComponents();

  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useHomeScreen } = useScreenHooks();
  const {
    moviesNowPlaying,
    popularMovies,
    upcomingMovies,
  } = useHomeScreen();

  // Loading? :)
  const { promiseInProgress } = usePromiseTracker();

  const { top } = useSafeAreaInsets();

  const { width } = Dimensions.get('window');

  const HomeScreenComponent = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: top + 20, paddingBottom: 100 }}>

          <View style={{ height: 440 }}>
            <Carousel
              data={moviesNowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={250}
              inactiveSlideScale={0.85}
              inactiveSlideOpacity={0.85}
            />
          </View>

          <HorizontalMovieSlider
            data={upcomingMovies}
            title='Upcoming Movies'
          />

          <HorizontalMovieSlider
            data={popularMovies}
            title='Popular Movies'
          />
        </View>
      </ScrollView>
    );
  };

  return promiseInProgress
    ? <SpinnerLoader />
    : <HomeScreenComponent />;

};

export default HomeScreen;