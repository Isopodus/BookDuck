import React, { useCallback } from "react";
import { TextInput } from "react-native";

import { withTheme } from "../../../hoc/withTheme";

const Input = ({ theme, name, placeholder, componentStyles, text, onChange }) => {
  const handleChange = useCallback(newValue => onChange(name, newValue), [name, onChange]);

  return (
    <TextInput
      style={componentStyles.input}
      placeholderTextColor={theme.colors.rgba(theme.colors.black, 0.5)}
      placeholder={placeholder}
      onChangeText={handleChange}
      onSubmitEditing={onChange}
      multiline
      value={text}
    />
  );
};

export default props => withTheme(Input)({ ...props, componentStyles: require("./styles").styles });
