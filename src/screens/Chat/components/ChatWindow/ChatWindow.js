import React from "react";
import { ScrollView } from "react-native";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";
import Message from "../../../../library/Molecules/Message";
import ChatTypingIndicator from "../ChatTypingIndicator/ChatTypingIndicator";

import { withTheme } from "../../../../hoc/withTheme";

const ChatWindow = ({ componentStyles }) => {
  return (
    <VerticalLayout style={componentStyles.container}>
      <ScrollView>
        <Message
          message="Hello again! Would you like to talk or see the history?"
          btns={[
            { text: "Start chatting", onPress: () => {} },
            { text: "Show history", onPress: () => {} },
          ]}
        />
        <Message message="Text" isMy />
      </ScrollView>
      <ChatTypingIndicator />
    </VerticalLayout>
  );
};

export default props => withTheme(ChatWindow)({ ...props, componentStyles: require("./ChatWindow.styles").styles });
