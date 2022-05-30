import * as React from "react";
import {Text, TextProps, StyleSheet, Platform} from "react-native";
import colors from "../config/colors";

interface Props extends TextProps {}

const AppText: React.FC<Props> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
