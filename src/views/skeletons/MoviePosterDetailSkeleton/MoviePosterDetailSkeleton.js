import React from "react";
import { StyleSheet, View } from "react-native";
import useHelpers from "../../../helpers";
import useComponents from "../../components";
import _ from "lodash";

const MoviePosterDetailSkeleton = () => {
  // Components
  const { Subtitle } = useComponents();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { isIos } = useQuickFunctions();

  return (
    <View>
      <Subtitle text="Cast" />
      <View style={styles.CastLoadingHeader}>
        {_.map([1, 2, 3], (idx) => (
          <View
            key={idx.toString()}
            style={{ ...styles.CastLoadingHeaderOption, borderRadius: isIos() ? 50 : 5 }}
          ></View>
        ))}
      </View>
      <View style={styles.CastLoadingProfilesContainer}>
        {_.map([1, 2, 3], (idx) => (
          <View key={idx.toString()} style={styles.CastLoadingProfile}>
            <View
              style={{ ...styles.CastLoadingProfileImage, borderRadius: isIos() ? 20 : 50 }}
            ></View>
            <View style={styles.CastLoadingProfileTitle}></View>
            <View style={styles.CastLoadingProfileSubtitle}></View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MoviePosterDetailSkeleton;

const styles = StyleSheet.create({
  CastLoadingHeader: {
    flexDirection: "row",
  },
  CastLoadingHeaderOption: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 50,
    alignSelf: "flex-start",
    paddingHorizontal: 35,
    paddingVertical: 15,
    marginLeft: 16,
  },
  CastLoadingProfilesContainer: {
    paddingVertical: 16,
    flexDirection: "row",
  },
  CastLoadingProfile: {
    width: 100,
    height: 125,
    marginLeft: 16,
    alignItems: "center",
  },
  CastLoadingProfileImage: {
    width: 75,
    height: 75,
    backgroundColor: "#333",
    borderRadius: 50,
    marginBottom: 8,
  },
  CastLoadingProfileTitle: {
    backgroundColor: "#333",
    marginBottom: 2,
    width: 65,
    height: 5,
    borderRadius: 5,
  },
  CastLoadingProfileSubtitle: {
    backgroundColor: "#222",
    marginTop: 5,
    width: 45,
    height: 5,
    borderRadius: 5,
  },
});
