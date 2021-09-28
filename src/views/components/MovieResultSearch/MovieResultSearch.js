import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableNativeFeedback } from "react-native";
import useControllers from "../../../controllers";
import useHelpers from "../../../helpers";

const MovieResultSearch = ({ movies }) => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { isIos, getImgUrl } = useQuickFunctions();

  // Controllers
  const { useComponentsHooks } = useControllers();
  const { useMovieResultSearch } = useComponentsHooks();
  const { navigateAndSetMovieSelected } = useMovieResultSearch();
  return movies.length > 0 ? (
    <FlatList
      data={movies}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableNativeFeedback
            onPress={() => navigateAndSetMovieSelected(item)}
            useForeground={false}
          >
            <View style={{ ...styles.movieResultContainer, borderRadius: isIos() ? 10 : 5 }}>
              <Image
                source={{ uri: getImgUrl(item.poster_path) }}
                style={{ ...styles.movieResultImage, borderRadius: isIos() ? 10 : 5 }}
              />
              <View style={styles.movieResultInfo}>
                <Text numberOfLines={1} style={styles.movieResultTitle}>
                  {item.title}
                </Text>
                <Text numberOfLines={2} style={styles.movieResultText}>
                  {item.overview}
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        );
      }}
    />
  ) : (
    <View style={styles.notMoviesFound}>
      <Text style={styles.notMoviesFoundText}>Not movies found.</Text>
    </View>
  );
};

export default MovieResultSearch;

const styles = StyleSheet.create({
  movieResultContainer: {
    backgroundColor: "#222",
    marginHorizontal: 16,
    marginVertical: 8,
    height: 100,
    padding: 8,
    flexDirection: "row",
  },
  movieResultImage: {
    height: 84,
    width: 84,
    backgroundColor: "#333",
  },
  movieResultInfo: {
    flex: 1,
    paddingHorizontal: 16,
  },
  movieResultTitle: {
    // height: 16,
    marginBottom: 8,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
  movieResultText: {
    marginBottom: 8,
    color: "#CCC",
  },
  notMoviesFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notMoviesFoundText: {
    color: "#C6C6C6",
    fontSize: 18,
  },
});
