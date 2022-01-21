import React from "react";
import { View } from "react-native";

import { withTheme, withLocalStyles } from "../../../hoc/withTheme";

import { componentStyles } from "./RowLayout.styles";

const RowLayout = ({ style, styles, children }) => <View style={{ ...styles.layout, ...style }}>{children}</View>;

export default withTheme(props => withLocalStyles(RowLayout)({ ...props, styles: componentStyles }));
