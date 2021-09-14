import React from "react";
import { Image, StyleSheet, View } from "react-native";
import useHelpers from "../../../helpers";

const MovieResultSearchSkeleton = () => {
  const { useQuickFunctions } = useHelpers();
  const { isIos } = useQuickFunctions();

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((movie, idx) => {
        return (
          <View
            key={idx.toString()}
            style={{ ...styles.movieResultContainer, borderRadius: isIos() ? 10 : 5 }}
          >
            <Image style={{ ...styles.movieResultImage, borderRadius: isIos() ? 10 : 5 }} />
            <View style={styles.movieResultInfo}>
              <View style={{ ...styles.movieResultTitle, borderRadius: isIos() ? 5 : 3 }}></View>
              <View style={{ ...styles.movieResultText, borderRadius: isIos() ? 5 : 3 }}></View>
              <View
                style={{ ...styles.movieResultText, borderRadius: isIos() ? 5 : 3, width: 150 }}
              ></View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default MovieResultSearchSkeleton;

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
    padding: 8,
  },
  movieResultTitle: {
    height: 16,
    backgroundColor: "#333",
    marginBottom: 8,
  },
  movieResultText: {
    height: 8,
    marginBottom: 8,
    backgroundColor: "#333",
  },
});
