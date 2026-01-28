import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
const carlogo = require("@/assets/images/car_logo.png");

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/input");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={carlogo} style={styles.carlogo} />
      <Text style={styles.appnameen}>Smart Auto Loan</Text>
      <Text style={styles.appnameth}>วางแผนออกรถฉบับมือโปร</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appnameen: {
    fontFamily: "Kanit_700Bold",
    fontSize: 30,
    color: "#ffffff",
  },
  appnameth: {
    fontFamily: "Kanit_700Bold",
    fontSize: 16,
    color: "#cbcbcb",
  },
  carlogo: {
    width: 120,
    height: 120,
  },
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e2938",
  },
});
