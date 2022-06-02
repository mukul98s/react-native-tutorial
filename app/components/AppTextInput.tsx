import * as React from "react";
import {View, TextInput, TextInputProps, StyleSheet} from "react-native";

import {IconType} from "../types/global";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../config/styles";

interface Props extends TextInputProps {
  icon?: IconType;
}

const AppTextInput: React.FC<Props> = ({icon, ...rest}) => {
  return (
    <View style={styles.container}>
      {icon && (
        // @ts-ignore
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput
        style={[defaultStyles.text, {width: "100%"}]}
        placeholderTextColor={colors.medium}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
