import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { withTheme } from "../../../../hoc/withTheme";

const PrimaryButton = ({ componentStyles, style, onPress, text }) => (
  <TouchableOpacity style={{ ...componentStyles.primaryBtn, ...style }} onPress={onPress}>
    <Text style={componentStyles.primaryBtnText}>{text}</Text>
  </TouchableOpacity>
);

export default props => withTheme(PrimaryButton)({ ...props, componentStyles: require("../styles").styles });
