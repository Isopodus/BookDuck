import React from "react";
import { View, Animated } from "react-native";

import { withTheme } from "../../../hoc/withTheme";

const RowLayout = ({ componentStyles, style, animated, children }) => {
  if (animated) return <Animated.View style={{ ...componentStyles.layout, ...style }}>{children}</Animated.View>;
  return <View style={{ ...componentStyles.layout, ...style }}>{children}</View>;
};

export default props => withTheme(RowLayout)({ ...props, componentStyles: require("./styles").styles });
