import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";

const ListingDetailsScreen = (props) => {
  const listing = props.route.params;
  let imageUrl = undefined;
  if (listing.images[0].url.length > 20) {
    imageUrl = listing.images[0].url;
  } else {
    imageUrl = listing.images[0].url[0];
  }
  return (
    <View>
      <Image
        style={styles.image}
        uri={imageUrl}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.container}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"INR " + listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            setPaddingZero={true}
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
