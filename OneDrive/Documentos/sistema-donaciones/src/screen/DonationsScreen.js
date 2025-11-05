import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import API from "../api/api";

export default function DonationsScreen() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    loadDonations();
  }, []);

  const loadDonations = async () => {
    const res = await API.get("/donations");
    setDonations(res.data);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.title}>Mis donaciones</Text>

      <FlatList
        data={donations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.amount}>${item.amount}</Text>
            <Text style={styles.label}>Fecha: {item.date}</Text>
            <Text style={styles.label}>Método: {item.method}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 3
  },
  amount: { fontSize: 22, fontWeight: "bold", color: "purple" },
  label: { fontSize: 16 }
});
