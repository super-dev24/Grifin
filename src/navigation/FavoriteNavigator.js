import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import FavoriteScreen from "../screens/FavoriteScreen";
import DetailScreen from "../screens/DetailScreen";
import { add_favorite } from "../redux/actions";

const Stack = createStackNavigator();

const FavoriteNavigator = () => {
  // const [isFavorite, setIsFavorite] = useState(false);
  // const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="FavoriteScreen">
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ title: "Favorites", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.name + "(" + route.params.symbol + ")",
          headerTitleAlign: "center",
          // headerRight: () => (
          //   <MaterialIcons
          //     name={isFavorite ? "favorite" : "favorite-outline"}
          //     size={28}
          //     color="#0390fc"
          //     style={{ marginRight: 12 }}
          //     onPress={() => {
          //       setIsFavorite(!isFavorite);
          //       dispatch(add_favorite(route.params.name, route.params.symbol));
          //     }}
          //   />
          // ),
        })}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigator;
