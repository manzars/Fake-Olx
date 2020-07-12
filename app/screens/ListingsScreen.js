import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";

import listingApi from "../api/listings";
import useApi from "../hooks/useApi";

const initialMessages = [
  {
    id: 1,
  },
];

const ListingsScreen = (props) => {
  const [refresh, setRefresh] = useState(false);
  const getListingsApi = useApi(listingApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const fetchedData = [];
  for (let key in getListingsApi.data) {
    fetchedData.push({
      ...getListingsApi.data[key],
    });
  }

  return (
    <Screen style={styles.screen} type="listScreen">
      {getListingsApi.error && (
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
              getListingsApi.request();
            }}
            style={{ height: "100%" }}
          />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={fetchedData}
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
