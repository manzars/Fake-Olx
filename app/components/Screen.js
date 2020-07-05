import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constant from "expo-constants";

const Screen = (props) => {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      {props.type === "listScreen" ? (
        <View style={{ paddingTop: 20 }}>{props.children}</View>
      ) : (
        props.children
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constant.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
