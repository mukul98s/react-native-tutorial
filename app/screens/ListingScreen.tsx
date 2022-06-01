import * as React from "react";
import {FlatList, StyleSheet} from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const Listing = [
  {
    id: 1,
    title: "Red Jacket",
    price: "$300",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Counch",
    price: "$3000",
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={Listing}
        keyExtractor={(menu) => menu.id.toString()}
        renderItem={({item}) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
