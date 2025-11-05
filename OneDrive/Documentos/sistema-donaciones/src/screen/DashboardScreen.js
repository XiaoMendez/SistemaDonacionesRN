import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function DashboardScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Donaciones</Text>
      
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Donations")}
      >
        <Text style={styles.btnText}>Ver Donaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.btnText}>Mi Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30 },
  btn: { backgroundColor: "purple", padding: 15, width: "80%", borderRadius: 8, marginBottom: 15 },
  btnText: { color: "#fff", textAlign: "center", fontSize: 18 },
  logout: { marginTop: 20, padding: 10 },
  logoutText: { color: "red", fontSize: 16 }
});
