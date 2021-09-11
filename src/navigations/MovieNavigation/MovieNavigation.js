import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import useViews from "../../views";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import useUtils from "../../utils";
import { color } from "react-native-reanimated";
import useHelpers from "../../helpers";

const Root = createStackNavigator();

const MovieNavigation = () => {
  // useViews
  const { useScreens } = useViews();
  const { HomeScreen, DetailMovieScreen } = useScreens();

  return (
    <Root.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Root.Screen
        name="HomeScreen"
        options={{ header: (props) => <CustomHeader {...props} /> }}
        component={HomeScreen}
      />
      <Root.Screen
        name="DetailMovieScreen"
        options={{ headerShown: false }}
        component={DetailMovieScreen}
      />
    </Root.Navigator>
  );
};

export default MovieNavigation;

const CustomHeader = ({ navigation }) => {
  // Hooks
  const { top } = useSafeAreaInsets();
  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { isIos } = useQuickFunctions();

  return (
    <View style={{ ...styles.headerContainer, marginTop: top }}>
      <View style={styles.headerMenu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.5}>
          <Icon name="menu-outline" size={35} color={color.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerSearchContainer}>
        <View style={{ ...styles.headerSearch, borderRadius: isIos() ? 10 : 5 }}>
          <Icon name="search-outline" size={20} color="#666" />
          <Text style={styles.headerSearchPlaceholder}>Search any movie here...</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderColor: "#222",
    borderBottomWidth: 1,
    height: 55,
    backgroundColor: "rgba(17,17,17, 0.1)",
    flexDirection: "row",
  },
  headerMenu: {
    // borderColor: "red",
    // borderWidth: 1,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  headerSearchContainer: {
    // borderColor: "red",
    // borderWidth: 1,
    flex: 1,
    paddingRight: 16,
    paddingVertical: 8,
  },
  headerSearch: {
    flex: 1,
    backgroundColor: "#222",
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  headerSearchPlaceholder: {
    marginLeft: 16,
    color: "#666",
  },
});
