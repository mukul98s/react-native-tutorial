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
import Swipeable, {
  SwipeableProps,
} from "react-native-gesture-handler/Swipeable";

interface Props {
  title: string;
  subtitle?: string;
  image?: ImageSourcePropType;
  onPress?: TouchableHighlightProps["onPress"];
  renderRightAction?: SwipeableProps["renderRightActions"];
  IconComponent?: React.ReactNode;
}

const ListItem: React.FC<Props> = ({
  title,
  subtitle,
  image,
  onPress,
  renderRightAction,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subtitle && (
                <AppText style={styles.subtitle}>{subtitle}</AppText>
              )}
            </View>
          </>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItem;
