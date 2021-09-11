import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MovieNavigation from "../MovieNavigation";

const RootDrawer = createDrawerNavigator();

const RootNavigation = () => {
  return (
    <RootDrawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootDrawer.Screen
        name="MovieNavigation"
        options={{ title: "Movies" }}
        component={MovieNavigation}
      />
    </RootDrawer.Navigator>
  );
};

export default RootNavigation;
