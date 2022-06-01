import {Platform} from "react-native";
import colors from "./colors";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
