import React, { useCallback, useState } from "react";
import { withTheme } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import Input from "../../../../library/Atoms/Input";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Icon } from "../../../../library/Atoms/Icon";

const ChatInput = ({ theme, componentStyles }) => {
  const [message, setMessage] = useState("");

  const onChange = useCallback((name, value) => setMessage(value), []);

  return (
    <RowLayout style={componentStyles.container}>
      <Input name="message" placeholder={"Type your message here..."} onChange={onChange} />
      <PrimaryButton
        style={{ ...componentStyles.sendBtn, ...componentStyles.sendTextBtn }}
        text={"text"}
        onPress={() => {}}
      >
        <Icon name="paper-plane-outline" color={theme.colors.white} size={theme.sizes.scale(22)} />
      </PrimaryButton>
      <PrimaryButton style={componentStyles.sendBtn} text={"text"} onPress={() => {}}>
        <Icon name="microphone-outline" color={theme.colors.white} size={theme.sizes.scale(25)} />
      </PrimaryButton>
    </RowLayout>
  );
};

export default props => withTheme(ChatInput)({ ...props, componentStyles: require("./ChatInput.styles").styles });
