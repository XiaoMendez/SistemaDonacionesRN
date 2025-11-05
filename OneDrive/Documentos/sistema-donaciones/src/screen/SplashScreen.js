import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 20, fontSize: 18 }}>Cargando...</Text>
    </View>
  );
}
