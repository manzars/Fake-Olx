import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";

const ListItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.innerContainer}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subtitle}>{props.subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  innerContainer: {
    flexDirection: "column",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
