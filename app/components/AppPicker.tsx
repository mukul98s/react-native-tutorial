import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Modal,
  Button,
  FlatList,
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import {IconType} from "../types/global";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

interface Props {
  icon: IconType;
  placeholder: string;
  items: any[];
  selectedItem: {label: any; value: any};
  onSelect: Function;
}

const AppPicker: React.FC<Props> = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelect,
}) => {
  const [isModal, setIsModal] = React.useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModal(true)}>
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
          <AppText style={styles.text}>
            {selectedItem.hasOwnProperty("label")
              ? selectedItem.label
              : placeholder}
          </AppText>
          {/*  @ts-ignore */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isModal} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item) => item?.value}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setIsModal(false);
                  onSelect(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
});

export default AppPicker;
