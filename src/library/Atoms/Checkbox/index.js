import React from "react";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import RowLayout from "../../Layouts/RowLayout";

import { withTheme } from "../../../hoc/withTheme";
import { Text } from "react-native";

export const Checkbox = ({ theme, checked, onToggle, componentStyles, label }) => (
  <RowLayout style={componentStyles.container}>
    <PaperCheckbox
      status={checked ? "checked" : "unchecked"}
      color={theme.colors.blue}
      uncheckedColor={theme.colors.blue}
      onPress={onToggle}
    />
    <Text style={componentStyles.label}>{label}</Text>
  </RowLayout>
);

export default props => withTheme(Checkbox)({ ...props, componentStyles: require("./styles").styles });
