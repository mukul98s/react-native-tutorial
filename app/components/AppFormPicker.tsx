import * as React from "react";
import {useFormikContext} from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props {
  items: any[];
  name: string;
  placeholder: string;
}

function AppFormPicker({items, name, placeholder}: Props) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelect={(item: any) => setFieldValue(name, item)}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
