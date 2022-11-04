import React from "react";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import colors from "../colors";

const Tap = createBottomTabNavigator();

const Taps = () => {
  const isDark = useColorScheme() === "dark";
  console.log(isDark);
  return (
    <Tap.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: isDark ? colors.DARK : colors.LIGHT },
        tabBarActiveTintColor: isDark ? colors.LIGHT : colors.DARK,
        headerStyle: {
          backgroundColor: isDark ? colors.DARK : colors.LIGHT,
        },
        headerTitleStyle: {
          color: isDark ? colors.LIGHT : colors.DARK,
        },
        tabBarInactiveBackgroundColor: isDark ? colors.DARK : colors.LIGHT,
      }}
    >
      <Tap.Screen name="Movies" component={Movies} />
      <Tap.Screen name="Tv" component={Tv} />
      <Tap.Screen name="Search" component={Search} />
    </Tap.Navigator>
  );
};

export default Taps;
