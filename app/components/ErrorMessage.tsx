import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  error: string | undefined;
  visible: boolean | undefined;
}

const ErrorMessage: React.FC<Props> = ({error, visible}) => {
  if (!visible || !error) {
    return null;
  }

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default ErrorMessage;
