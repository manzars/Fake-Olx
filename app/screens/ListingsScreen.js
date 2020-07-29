import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";

import listingApi from "../api/listings";
import useApi from "../hooks/useApi";
import AuthContext from "../auth/context";

const initialMessages = [
  {
    id: 1,
  },
];

const ListingsScreen = (props) => {
  const [refresh, setRefresh] = useState(false);
  const getListingsApi = useApi(listingApi.getListings);
  const { token, local, setName } = useContext(AuthContext);
  const getUserApi = useApi(listingApi.getUsers);

  useEffect(() => {
    getUserApi.request(token, "/users.json");
  }, [token]);

  useEffect(() => {
    getListingsApi.request(token);
  }, [token]);

  const fetchedUser = [];
  for (let key in getUserApi.data) {
    fetchedUser.push({
      ...getUserApi.data[key],
    });
  }
  // console.log(fetchedUser[0]["localId"], local);

  const fetchedData = [];
  for (let key in getListingsApi.data) {
    fetchedData.push({
      ...getListingsApi.data[key],
    });
  }
  if (fetchedUser) {
    for (let i = 0; i < fetchedUser.length; i++) {
      if (fetchedUser[i]["localId"] === local) {
        console.log(fetchedUser[i]);
        setName(fetchedUser[i]["name"]);
      }
    }
  }

  return (
    <React.Fragment>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
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
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={fetchedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              image={
                item.images[0].url.length > 20
                  ? item.images[0].url
                  : item.images[0].url[0]
              }
              thumbnail={item.images[0].thumbnailUrl}
              title={item.title}
              subTitle={"INR " + item.price}
              cardPressed={() =>
                props.navigation.navigate("ListingDetails", item)
              }
            />
          )}
        />
      </Screen>
    </React.Fragment>
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
