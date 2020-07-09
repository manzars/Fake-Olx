import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 15,
      },
      style: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 20,
      },
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: (props) => (
          <MaterialCommunityIcons
            name="home"
            color={props.color}
            size={props.size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={(props) => ({
        tabBarButton: () => (
          <NewListingButton
            navBtnClick={() => props.navigation.navigate("ListingEdit")}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: (props) => (
          <MaterialCommunityIcons
            name="account"
            color={props.color}
            size={props.size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
