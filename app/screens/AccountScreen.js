import React, { useContext } from "react";
import { View, StyleSheet, Platform, Alert } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
import AuthContext from "../auth/context";
import authStorage from "../auth/authStorage";

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
  const { user, setUser, name, setName } = useContext(AuthContext);

  let noPadding = false;
  if (Platform.OS === "android") {
    noPadding = true;
  }

  const handleLogout = () => {
    setUser((state) => null);
    authStorage.removeToken();
    setName((state) => null);
  };

  const handleClick = () => {
    Alert.alert("Logout", "Are you sure!", [
      { text: "Yes", onPress: handleLogout },
      { text: "No" },
    ]);
  };
  return (
    <Screen style={styles.screen} noPadding={noPadding}>
      <View style={styles.container}>
        <ListItem
          title={name}
          subTitle={user.email}
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
          click={handleClick}
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
