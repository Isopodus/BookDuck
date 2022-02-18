import React from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { withTheme } from "../../../hoc/withTheme";

const ScreenLayout = ({ componentStyles, style, theme, children }) => {
  return (
    <LinearGradient colors={[theme.colors.blue, theme.colors.lightOrange]} style={[componentStyles.layout, style]}>
      {children}
    </LinearGradient>
  );
};

export default props => withTheme(ScreenLayout)({ ...props, componentStyles: require("./styles").styles });
