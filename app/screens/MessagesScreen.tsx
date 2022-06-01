import * as React from "react";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import ListItem from "../components/ListItem";
import contants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

interface Message {
  id: number;
  title: string;
  description: string;
  image: any;
}

const initialMessages: Message[] = [
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
  const [messages, setMessages] = React.useState(initialMessages);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleDelete = (item: Message) => {
    setMessages((prev) => {
      return prev.filter((m) => m.id !== item.id);
    });
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.title}
        renderItem={({item}) => (
          <ListItem
            image={item.image}
            subtitle={item.description}
            title={item.title}
            onPress={() => console.log("Press")}
            renderRightAction={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={isRefreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
