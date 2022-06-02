import * as React from "react";
import {useFormikContext} from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";
import {PickerItemType, PicketItemComponentProps} from "../types/global";
import PickerItem from "./PickerItem";

interface Props {
  items: PickerItemType[];
  name: string;
  placeholder: string;
  PickerItemComponent?: React.FC<PicketItemComponentProps>;
  numberOfColumn?: number;
}

function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent = PickerItem,
  numberOfColumn = 1,
}: Props) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelect={(item: any) => setFieldValue(name, item)}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
        PicketItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumn}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
