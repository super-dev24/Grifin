import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { get_stocks } from "../redux/actions";
import SearchBar from "../components/SearchBar";
import { AntDesign } from "@expo/vector-icons";
import { debounce } from "lodash";

const SearchScreen = ({ navigation }) => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const { stocks } = useSelector((state) => state.stocksReducer);
  const dispatch = useDispatch();

  const debouncedChangeHandler = useMemo(
    () => debounce((text) => fetchQuery(text), 500),
    []
  );

  const handleInputChange = (text) => {
    setSearchPhrase(text);
    if (text) debouncedChangeHandler(text);
  };

  const fetchQuery = (text) => {
    dispatch(get_stocks(text));
  };

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailScreen", {
            symbol: item["1. symbol"],
            name: item["2. name"],
          })
        }
        style={styles.container}
      >
        <View>
          <Text style={styles.title}>{item["1. symbol"]}</Text>
          <Text>{item["2. name"]}</Text>
        </View>
        <AntDesign name="right" size={20} color="#b8b9ba" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <SearchBar
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        handleInputChange={handleInputChange}
      />
      <FlatList
        data={stocks}
        keyExtractor={(item) => item["1. symbol"]}
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

export default SearchScreen;
