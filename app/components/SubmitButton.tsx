import * as React from "react";
import {useFormikContext} from "formik";

import AppButton from "./AppButton";

const SubmitButton = ({title}: {title: string}) => {
  const {handleSubmit} = useFormikContext();
  return <AppButton text={title} onPress={handleSubmit} />;
};

export default SubmitButton;
