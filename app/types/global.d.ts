import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {TouchableOpacityProps} from "react-native";

type IconType = keyof typeof MaterialCommunityIcons.glyphMap;
type Color = keyof typeof colors;

type PicketItemComponentProps = {
  item: PickerItemType;
  onPress: TouchableOpacityProps["onPress"];
};

type PickerItemType = {
  backgroundColor?: Color;
  icon?: IconType;
  label: string;
  value: string | number;
};
