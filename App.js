import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  console.log("App executed");
  let x = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

// for avoiding notch in android
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? 35 : 0,
//   },
// });
