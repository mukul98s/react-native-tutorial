import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

import {PicketItemComponentProps} from "../types/global";

const CategoryPickerItem: React.FC<PicketItemComponentProps> = ({
  item,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          // @ts-ignore
          name={item.icon}
          size={80}
          background={item.backgroundColor}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
