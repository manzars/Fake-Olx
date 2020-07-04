import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.container}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>INR 999</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Manzar Shaikh"
            subTitle="5 Listings"
            image={require("../assets/manzar.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 10,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
