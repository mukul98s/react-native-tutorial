import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import AppText from "./AppText";

interface Props {
  label: string;
  onPress: TouchableOpacityProps["onPress"];
}

const PickerItem: React.FC<Props> = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
