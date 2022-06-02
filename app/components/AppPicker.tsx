import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Button,
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import {
  IconType,
  PickerItemType,
  PicketItemComponentProps,
} from "../types/global";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

interface Props {
  icon?: IconType;
  placeholder: string;
  items: PickerItemType[];
  selectedItem: {label: any; value: any} | null;
  onSelect: Function;
  PicketItemComponent?: React.FC<PicketItemComponentProps>;
  numberOfColumns?: number;
}

const AppPicker: React.FC<Props> = ({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelect,
  PicketItemComponent = PickerItem,
  numberOfColumns = 1,
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
          {selectedItem && selectedItem.hasOwnProperty("label") ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
          <Button title="Close" onPress={() => setIsModal(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <PicketItemComponent
                item={item}
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
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
