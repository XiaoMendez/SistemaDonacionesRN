import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <Text style={styles.field}>Nombre: {user?.name}</Text>
      <Text style={styles.field}>Email: {user?.email}</Text>

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 25 },
  field: { fontSize: 18, marginBottom: 10 },
  logout: { marginTop: 30, backgroundColor: "red", padding: 12, borderRadius: 8 },
  logoutText: { color: "#fff", textAlign: "center", fontSize: 18 }
});
