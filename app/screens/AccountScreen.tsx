import * as React from "react";
import {View, StyleSheet, FlatList} from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

import {Color, IconType} from "../types/global";

interface MenuItems {
  title: string;
  icon: {
    name: IconType;
    background: Color;
    forground: Color;
  };
}

const manyItems: MenuItems[] = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      background: "primary",
      forground: "white",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      background: "secondary",
      forground: "white",
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mukul Sharma"
          subtitle="Programmer"
          image={require("../assets/avatar.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={manyItems}
          keyExtractor={(menu) => menu.title}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  background={item.icon.background}
                  forground={item.icon.forground}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={
            <Icon name="logout" background="yellow" forground="white" />
          }
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
