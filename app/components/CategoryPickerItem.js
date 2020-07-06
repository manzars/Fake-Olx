import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = (props) => {
  return (
    <View style={styles.container}>
      <Icon
        backgroundColor={props.item.backgroundColor}
        name={props.item.icon}
        size={80}
        iconColor="white"
      />
      <AppText style={styles.text}>{props.item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33.333333%",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
