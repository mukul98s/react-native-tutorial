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
import {MaterialCommunityIcons} from "@expo/vector-icons";

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
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.subTitle} numberOfLines={1}>
                  {subtitle}
                </AppText>
              )}
            </View>
            {/* @ts-ignore */}
            <MaterialCommunityIcons name="chevron-right" size={25} />
          </>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
