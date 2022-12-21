import React from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import { clear_stocks } from "../redux/actions";
import { useDispatch } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Search Stock"
        onPress={() => {
          dispatch(clear_stocks());
          navigation.navigate("SearchNavigator");
        }}
      />
      <Button
        title="Favorite Stock"
        onPress={() => navigation.navigate("FavoriteNavigator")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default HomeScreen;
