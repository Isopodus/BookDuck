import React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import RowLayout from "../../Layouts/RowLayout";
import { Icon } from "../Icon";
import VerticalLayout from "../../Layouts/VerticalLayout";

import { withTheme } from "../../../hoc/withTheme";
import { useToggle } from "../../../hooks/useToggle";

const Input = ({ theme, componentStyles, type = "text", icon, helper, ...props }) => {
  const [showContent, toggleShowContent] = useToggle(type === "password");
  return (
    <VerticalLayout style={componentStyles.container}>
      <RowLayout style={componentStyles.inputWrapper}>
        <TextInput
          style={componentStyles.input}
          placeholderTextColor={theme.colors.rgba(theme.colors.black, 0.7)}
          secureTextEntry={showContent}
          {...props}
        />
        {icon && <Icon name={icon} size={theme.sizes.scale(16)} color={theme.colors.blue} />}
        {type === "password" && (
          <TouchableOpacity onPress={toggleShowContent}>
            <Icon
              name={showContent ? "eye-outline" : "eye-off-outline"}
              size={theme.sizes.scale(16)}
              color={theme.colors.blue}
            />
          </TouchableOpacity>
        )}
      </RowLayout>
      {helper ? <Text style={componentStyles.helper}>{helper}</Text> : null}
    </VerticalLayout>
  );
};

export default props => withTheme(Input)({ ...props, componentStyles: require("./styles").styles });
