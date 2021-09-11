import React from "react";
import { View, Dimensions, ScrollView, RefreshControl, StatusBar } from "react-native";
import useControllers from "../../../controllers";
import useComponents from "../../components";
import { usePromiseTracker } from "react-promise-tracker";
import Carousel from "react-native-snap-carousel";

const HomeScreen = () => {
  // Components
  const { SpinnerLoader, MoviePoster, HorizontalMovieSlider } = useComponents();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useHomeScreen } = useScreenHooks();
  const { moviesNowPlaying, popularMovies, upcomingMovies, getAllHomeMovieData } = useHomeScreen();

  // Loading? :)
  const { promiseInProgress } = usePromiseTracker();

  const { width } = Dimensions.get("window");

  const HomeScreenComponent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={promiseInProgress} onRefresh={getAllHomeMovieData} />
        }
      >
        <StatusBar translucent={true} backgroundColor="#111" />
        <View style={{ paddingTop: 16, paddingBottom: 100 }}>
          <View style={{ height: 400 }}>
            <Carousel
              data={moviesNowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={250}
              inactiveSlideScale={0.85}
              inactiveSlideOpacity={0.85}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <HorizontalMovieSlider data={upcomingMovies} title="Upcoming Movies" />

          <HorizontalMovieSlider data={popularMovies} title="Popular Movies" />
        </View>
      </ScrollView>
    );
  };

  return promiseInProgress ? <SpinnerLoader /> : <HomeScreenComponent />;
};

export default HomeScreen;
