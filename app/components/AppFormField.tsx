import * as React from "react";
import {TextInputProps} from "react-native";
import {useFormikContext} from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";
import {IconType} from "../types/global";

interface Props extends TextInputProps {
  name: string;
  icon?: IconType;
}

const AppFormField: React.FC<Props> = ({name, icon, ...rest}) => {
  const {errors, touched, handleChange, setFieldTouched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name, true)}
        icon={icon}
        {...rest}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
