import * as React from "react";
import {Text, TextProps} from "react-native";

import defaultStyles from "../config/styles";

interface Props extends TextProps {}

const AppText: React.FC<Props> = ({children, style, ...rest}) => {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
