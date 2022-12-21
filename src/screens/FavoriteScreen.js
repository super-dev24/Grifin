import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const FavoriteScreen = ({ navigation }) => {
  const { favorite } = useSelector((state) => state.stocksReducer);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailScreen", {
            symbol: item.symbol,
            name: item.name,
          })
        }
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>{item.symbol}</Text>
          <Text>{item.name}</Text>
        </View>
        <AntDesign name="right" size={20} color="#b8b9ba" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={favorite}
        keyExtractor={(item) => item.symbol}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 16,
    borderBottomColor: "#b8b9ba",
    borderBottomWidth: 1,
    padding: 4,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
  },
});

export default FavoriteScreen;
