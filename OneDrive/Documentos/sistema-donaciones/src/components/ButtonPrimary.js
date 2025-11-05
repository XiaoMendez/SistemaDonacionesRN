import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonPrimary({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "purple",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
