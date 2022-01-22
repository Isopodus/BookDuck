import React from "react";
import { View } from "react-native";

import { withTheme } from "../../../hoc/withTheme";

const RowLayout = ({ componentStyles, style, children }) => (
  <View style={{ ...componentStyles.layout, ...style }}>{children}</View>
);

export default props => withTheme(RowLayout)({ ...props, componentStyles: require("./styles").styles });
