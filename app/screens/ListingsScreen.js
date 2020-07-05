import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: 999,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Great Condition",
    price: 9999,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = (props) => {
  return (
    <Screen style={styles.screen} type="listScreen">
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"INR " + item.price}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
