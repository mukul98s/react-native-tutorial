import * as React from "react";
import {SafeAreaView, StyleSheet, ViewStyle, StyleProp} from "react-native";
import Constants from "expo-constants";

interface Props {
  children: JSX.Element[] | JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const Screen: React.FC<Props> = ({children, style}) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
