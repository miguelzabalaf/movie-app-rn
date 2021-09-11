import React, { Suspense } from "react";
import { StyleSheet, StatusBar, ScrollView, View } from "react-native";
import { usePromiseTracker } from "react-promise-tracker";
import useControllers from "../../../controllers";
import useComponents from "../../components";
import SpinnerLoader from "../../components/SpinnerLoader";
import useSkeletons from "../../skeletons";

const DetailMovieScreen = () => {
  // Controllers
  const { useScreenHooks } = useControllers();
  const { useDetailMovieScreen } = useScreenHooks();
  const {
    movie,
    getGenresList,
    getReleaseYear,
    getAverageAndProgress,
    goToHomeScreen,
    moviesRecommendationa,
  } = useDetailMovieScreen();

  const { average, progress } = getAverageAndProgress();

  // Components
  const {
    MoviePosterDetail,
    MovieOverviewDetail,
    MovieCastSection,
    HorizontalMovieSlider,
    ModalProfile,
  } = useComponents();

  const { MoviePosterDetailSkeleton } = useSkeletons();

  const { promiseInProgress } = usePromiseTracker();

  return (
    <ScrollView style={styles.detailMovieScreenContainer} showsVerticalScrollIndicator={false}>
      {promiseInProgress && <SpinnerLoader />}
      <StatusBar backgroundColor="transparent" translucent={true} />
      <MoviePosterDetail genres={getGenresList()} movie={movie} goBack={goToHomeScreen} />
      <MovieOverviewDetail
        overview={movie.overview}
        average={average}
        progress={progress}
        releaseYear={getReleaseYear()}
      />
      <Suspense fallback={<MoviePosterDetailSkeleton />}>
        <MovieCastSection />
      </Suspense>
      <ModalProfile />
      <HorizontalMovieSlider data={moviesRecommendationa} title="Recommendations" />
      <View style={styles.spaceBottom}></View>
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({
  spaceBottom: {
    marginBottom: 100,
  },
});
