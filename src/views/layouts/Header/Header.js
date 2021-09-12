import React from "react";
import { View, TouchableOpacity, StyleSheet, TextInput, Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import useControllers from "../../../controllers";
import useUtils from "../../../utils";

const Header = ({ navigation }) => {
  // Hooks
  const { top } = useSafeAreaInsets();

  // Utils
  const { useColors } = useUtils();
  const { color } = useColors();

  // Hooks
  const { useLayoutHooks } = useControllers();
  const { useHeader } = useLayoutHooks();
  const { handleOnFocusInput, isIos, iamStayInScreen, searchRef } = useHeader(navigation);

  return (
    <View style={{ ...styles.headerContainer, marginTop: top }}>
      <View style={styles.headerMenu}>
        <TouchableOpacity
          onPress={() =>
            iamStayInScreen("HomeScreen") ? navigation.openDrawer() : navigation.goBack()
          }
          activeOpacity={0.5}
        >
          <Icon
            name={iamStayInScreen("HomeScreen") ? "menu-outline" : "arrow-back-outline"}
            size={35}
            color={color.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerSearchContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handleOnFocusInput()}
          style={{ ...styles.headerSearch, borderRadius: isIos() ? 10 : 5 }}
        >
          <Icon name={"search-outline"} size={20} color="#666" />
          <TextInput
            ref={searchRef}
            editable={iamStayInScreen("HomeScreen") ? false : true}
            style={{
              flex: 1,
              paddingLeft: 16,
              color: "#CCC",
              display: iamStayInScreen("SearchScreen") ? "flex" : "none",
            }}
            placeholder="Search any movie here.."
            placeholderTextColor="#666"
            clearButtonMode="while-editing"
            onFocus={() => {}}
          />
        </TouchableOpacity>
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
