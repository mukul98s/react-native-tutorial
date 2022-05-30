import {View, Text, StyleSheet} from "react-native";
import colors from "../config/colors";

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
