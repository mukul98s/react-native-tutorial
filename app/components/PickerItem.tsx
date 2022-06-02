import * as React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

import AppText from "./AppText";
import {PicketItemComponentProps} from "../types/global";

const PickerItem: React.FC<PicketItemComponentProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
