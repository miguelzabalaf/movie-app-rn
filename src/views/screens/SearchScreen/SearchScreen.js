import React, { Suspense, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import useHelpers from "../../../helpers";
import useComponents from "../../components";
import useSkeletons from "../../skeletons";

const SearchScreen = () => {
  const { useQuickFunctions } = useHelpers();
  const { isIos } = useQuickFunctions();

  // Views
  const { MovieResultSearch } = useComponents();
  const { MovieResultSearchSkeleton } = useSkeletons();

  return (
    <Suspense fallback={<MovieResultSearchSkeleton />}>
      <MovieResultSearch />
    </Suspense>
  );
};

export default SearchScreen;

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
