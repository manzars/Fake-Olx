import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";

import listingApi from "../api/listings";

const initialMessages = [
  {
    id: 1,
  },
];

const ListingsScreen = (props) => {
  const [listings, setListings] = useState([]);
  const [error, seterror] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListing();
  }, []);

  const loadListing = async () => {
    setLoading(true);
    const response = await listingApi.getListings();
    setLoading(false);
    if (!response.ok) return seterror(true);
    seterror(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen} type="listScreen">
      {error && (
        <>
          <FlatList
            data={initialMessages}
            keyExtractor={(data) => data.id.toString()}
            renderItem={() => {
              return (
                <>
                  <Text style={styles.error}>
                    We Couldn't Retrive the Listing
                  </Text>
                  <Text style={styles.error}>Please Pull to refresh</Text>
                </>
              );
            }}
            refreshing={refresh}
            onRefresh={() => {
              loadListing();
            }}
            style={{ height: "100%" }}
          />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.images[0].url}
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
  error: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default ListingsScreen;
