import React from "react";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import colors from "../colors";
import { Feather } from "@expo/vector-icons";

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
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "800",
        },
      }}
    >
      <Tap.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="film" size={size} color={color} />;
          },
        }}
      />
      <Tap.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="tv" size={size} color={color} />;
          },
        }}
      />
      <Tap.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="search" size={size} color={color} />;
          },
        }}
      />
    </Tap.Navigator>
  );
};

export default Taps;
