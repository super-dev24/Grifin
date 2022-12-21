import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchNavigator from "./SearchNavigator";
import FavoriteNavigator from "./FavoriteNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ presentation: "modal" }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home Screen", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="SearchNavigator"
          component={SearchNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavoriteNavigator"
          component={FavoriteNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
