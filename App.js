import React from "react";
import Screen from "./app/components/Screen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/components/navigation/AuthNavigation";
import navigationTheme from "./app/components/navigation/navigationTheme";
import AppNavigator from "./app/components/navigation/AppNavigator";
import TestingImg from "./app/components/TestingImg";

export default function App() {
  return <TestingImg />;
}

// <NavigationContainer theme={navigationTheme}>
//       <AppNavigator />
//     </NavigationContainer>
