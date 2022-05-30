import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import colors from "../config/colors";

type color = keyof typeof colors;

interface Props extends TouchableOpacityProps {
  text: string;
  color?: color;
}

const AppButton: React.FC<Props> = ({
  children,
  text,
  color = "primary",
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
