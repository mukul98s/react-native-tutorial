import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Color, IconType} from "../types/global";

interface Props {
  name: IconType;
  size?: number;
  background?: Color;
  forground?: Color;
}

const Icon: React.FC<Props> = ({
  name,
  size = 40,
  background = "black",
  forground = "white",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors[background],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* @ts-ignore */}
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={colors[forground]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // width:
});

export default Icon;
