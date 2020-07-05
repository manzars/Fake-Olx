import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

const ListItem = (props) => {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <TouchableHighlight onPress={props.click} underlayColor={colors.light}>
        <View style={styles.container}>
          {props.IconComponent}
          {props.image && <Image style={styles.image} source={props.image} />}
          <View style={styles.innerContainer}>
            <AppText style={styles.title}>{props.title}</AppText>
            {props.subTitle && (
              <AppText style={styles.subtitle}>{props.subTitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
