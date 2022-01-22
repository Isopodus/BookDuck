import React from "react";
import { Text } from "react-native";
import { Animation } from "../../../../library/Atoms/Animation";
import RowLayout from "../../../../library/Layouts/RowLayout";
import { Icon } from "../../../../library/Atoms/Icon";

import { withTheme } from "../../../../hoc/withTheme";

const ChatTypingIndicator = ({ theme, componentStyles }) => (
  <RowLayout style={componentStyles.container}>
    <Animation name="typing" style={componentStyles.animation} />
    <Icon name="duck" color={theme.colors.yellow} size={theme.sizes.scale(25)} />
    <Text style={componentStyles.text}>
      <Text style={componentStyles.name}>BookDuck</Text> is typing you
    </Text>
  </RowLayout>
);

export default props =>
  withTheme(ChatTypingIndicator)({ ...props, componentStyles: require("./ChatTypingIndicator.styles").styles });
