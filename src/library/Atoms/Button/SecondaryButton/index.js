import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { withTheme } from "../../../../hoc/withTheme";

const SecondaryButton = ({ componentStyles, style, onPress, text }) => (
  <TouchableOpacity style={{ ...componentStyles.secondaryButton, ...style }} onPress={onPress}>
    <Text style={componentStyles.secondaryButtonText}>{text}</Text>
  </TouchableOpacity>
);

export default props => withTheme(SecondaryButton)({ ...props, componentStyles: require("../styles").styles });
