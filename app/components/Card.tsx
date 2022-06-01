import * as React from "react";
import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

const Card: React.FC<Props> = ({title, subtitle, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
