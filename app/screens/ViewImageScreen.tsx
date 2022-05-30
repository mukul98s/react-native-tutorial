import * as React from "react";
import {Image, StyleSheet, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        {/* @ts-ignore */}
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        {/* @ts-ignore */}
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
