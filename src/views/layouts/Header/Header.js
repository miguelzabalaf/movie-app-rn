import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import useHelpers from "../../../helpers";
import useUtils from "../../../utils";

const Header = ({ navigation }) => {
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

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    borderColor: "#222",
    borderBottomWidth: 1,
    height: 55,
    backgroundColor: "rgba(17,17,17, 0.1)",
    flexDirection: "row",
  },
  headerMenu: {
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  headerSearchContainer: {
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
