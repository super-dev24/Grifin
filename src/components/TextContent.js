import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TextContent = ({ label, data, info }) =>
  data[info] ? (
    <View style={styles.information}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.content}>{data[info]}</Text>
    </View>
  ) : null;

export default TextContent;

const styles = StyleSheet.create({
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
});
