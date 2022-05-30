import * as React from "react";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import ListItem from "../components/ListItem";
import contants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";

const message = [
  {
    id: 1,
    title: "James",
    description: "James the writer",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "Steve",
    description: "James the writer",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 3,
    title: "Starc",
    description: "James the writer",
    image: require("../assets/avatar.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(m) => m.title}
        renderItem={({item}) => (
          <ListItem
            image={item.image}
            subtitle={item.description}
            title={item.title}
            onPress={() => console.log(`I Clicked ${item.title}`)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
};

export default MessagesScreen;
