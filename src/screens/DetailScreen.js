import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ALPHA_VANTAGE_API_KEY } from "@env";
import { add_favorite, remove_favorite } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import TextContent from "../components/TextContent";

const DetailScreen = ({ route }) => {
  const [detail, setDetail] = useState({});
  const { symbol, name } = route.params;
  const { favorite } = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  const get_detail = async (symbol) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return {};
    }
  };

  useEffect(() => {
    setDetail(get_detail(symbol));
  }, [symbol]);

  const handleAddFavorite = (name, symbol) => {
    dispatch(add_favorite(name, symbol));
  };

  const handleRemoveFavorite = (symbol) => {
    dispatch(remove_favorite(symbol));
  };

  const ifExists = (symbol) => {
    if (favorite.filter((item) => item.symbol === symbol).length > 0) {
      return true;
    }
    return false;
  };

  const handlePress = () => {
    ifExists(symbol)
      ? handleRemoveFavorite(symbol)
      : handleAddFavorite(name, symbol);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.overview}>{detail["Description"]}</Text>
      <View style={{ marginTop: 32 }}>
        {["Industry", "Sector", "Exchange", "Currency"].map((key) => (
          <TextContent key={key} label={key} data={detail} info={key} />
        ))}
      </View>

      <View style={{ marginTop: 42 }}>
        {["52WeekLow", "52WeekHigh"].map((key) => (
          <TextContent key={key} label={key} data={detail} info={key} />
        ))}
      </View>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.button}>
          <MaterialIcons
            name={ifExists(symbol) ? "favorite" : "favorite-outline"}
            size={28}
            color="#fff"
            style={{ marginRight: 16 }}
          />
          <Text style={styles.buttonText}>
            {ifExists(symbol) ? "Remove Favorite" : "Add Favorite"}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  overview: {
    fontSize: 18,
    textAlign: "justify",
  },
  information: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    minWidth: 150,
  },
  content: {
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    marginTop: 64,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0390fc",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default DetailScreen;
