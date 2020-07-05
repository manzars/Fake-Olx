import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 5,
    title: "T5",
    description: "D5",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 6,
    title: "T6",
    description: "D6",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 7,
    title: "T7",
    description: "D7",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 8,
    title: "T8",
    description: "D8",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 9,
    title: "T9",
    description: "D9",
    image: require("../assets/manzar.jpg"),
  },
  {
    id: 10,
    title: "T10",
    description: "D10",
    image: require("../assets/manzar.jpg"),
  },
];
const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refresh, setRefresh] = useState(false);

  const deleteMessages = (message) => {
    setMessages(messages.filter((mess) => mess.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            click={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteMessages(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 10,
              title: "T10",
              description: "D10",
              image: require("../assets/manzar.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
