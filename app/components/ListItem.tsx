import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  onPress: TouchableHighlightProps["onPress"];
}

const ListItem: React.FC<Props> = ({title, subtitle, image, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
