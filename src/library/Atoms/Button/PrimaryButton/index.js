import React from "react";
import { TouchableOpacity } from "react-native";

import { withTheme } from "../../../../hoc/withTheme";

const PrimaryButton = ({ componentStyles, style, onPress, children }) => (
  <TouchableOpacity style={{ ...componentStyles.primaryBtn, ...style }} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default props => withTheme(PrimaryButton)({ ...props, componentStyles: require("../styles").styles });
