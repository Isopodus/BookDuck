import React, { useCallback } from "react";
import { TextInput } from "react-native";

import { withTheme, withLocalStyles } from "../../../hoc/withTheme";

import { componentStyles } from "./styles";

const Input = ({ theme, name, placeholder, styles, onChange }) => {
  const handleChange = useCallback(newValue => onChange(name, newValue), [name, onChange]);

  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={theme.colors.rgba(theme.colors.black, 0.5)}
      placeholder={placeholder}
      onChange={handleChange}
      onSubmitEditing={onChange}
      returnKeyType="enter"
      multiline
    />
  );
};

export default withTheme(props => withLocalStyles(Input)({ ...props, styles: componentStyles }));
