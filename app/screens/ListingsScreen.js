import React from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
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
  console.log(props.navigation);

  return (
    <Screen style={styles.screen} type="listScreen">
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"INR " + item.price}
            cardPressed={() =>
              props.navigation.navigate("ListingDetails", item)
            }
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.light,
  },
  flatList: {
    paddingTop: 10,
  },
});

export default ListingsScreen;
