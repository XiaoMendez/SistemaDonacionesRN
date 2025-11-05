import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen({ navigation }) {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = () => register(form);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Crear Cuenta</Text>

      <TextInput placeholder="Nombre" onChangeText={(t) => setForm({ ...form, name: t })} style={{ marginVertical: 10 }} />
      <TextInput placeholder="Email" onChangeText={(t) => setForm({ ...form, email: t })} style={{ marginVertical: 10 }} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={(t) => setForm({ ...form, password: t })} />

      <TouchableOpacity onPress={handleRegister} style={{ marginTop: 20, backgroundColor: "green", padding: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
        <Text style={{ color: "blue", textAlign: "center" }}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
