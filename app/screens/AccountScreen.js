import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = (props) => {
  let noPadding = false;
  if (Platform.OS === "android") {
    noPadding = true;
  }
  return (
    <Screen style={styles.screen} noPadding={noPadding}>
      <View style={styles.container}>
        <ListItem
          title="Manzar Shaikh"
          subTitle="manzarshaikh69@gmail.com"
          image={require("../assets/manzar.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              click={() => props.navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;