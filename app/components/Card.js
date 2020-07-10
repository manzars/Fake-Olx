import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";

function Card(props) {
  return (
    <TouchableOpacity onPress={props.cardPressed}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{props.title}</AppText>
          <AppText style={styles.subTitle}>{props.subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
