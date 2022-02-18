import React from "react";
import { View, Animated } from "react-native";

import { withTheme } from "../../../hoc/withTheme";

const VerticalLayout = ({ componentStyles, style, children }) => (
  <View style={{ ...componentStyles.layout, ...style }}>{children}</View>
);

export default props => withTheme(VerticalLayout)({ ...props, componentStyles: require("./styles").styles });
