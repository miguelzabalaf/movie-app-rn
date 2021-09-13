import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import useHelpers from "../../../helpers";

const MovieResultSearch = ({ movies }) => {
  const { useQuickFunctions } = useHelpers();
  const { isIos } = useQuickFunctions();
  return (
    <FlatList
      data={movies | []}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, idx) => idx.toString()}
      renderItem={({ item }) => {
        return (
          <View style={{ ...styles.movieResultContainer, borderRadius: isIos() ? 10 : 5 }}>
            <Image style={{ ...styles.movieResultImage, borderRadius: isIos() ? 10 : 5 }} />
            <View style={styles.movieResultInfo}>
              <Text numberOfLines={1} style={styles.movieResultTitle}>
                Spiderman 3
              </Text>
              <Text numberOfLines={2} style={styles.movieResultText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>
        );
      }}
    />
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
});
