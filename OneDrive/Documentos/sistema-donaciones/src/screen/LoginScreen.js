import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => login(email, password);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Iniciar Sesión</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginVertical: 10 }} />
      <TextInput placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity onPress={handleLogin} style={{ marginTop: 20, backgroundColor: "purple", padding: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ marginTop: 10 }}>
        <Text style={{ color: "blue", textAlign: "center" }}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}
