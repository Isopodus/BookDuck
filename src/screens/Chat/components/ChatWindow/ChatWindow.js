import React from "react";
import { ScrollView } from "react-native";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";
import Message from "../../../../library/Molecules/Message";
import ChatTypingIndicator from "../ChatTypingIndicator/ChatTypingIndicator";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { withTheme } from "../../../../hoc/withTheme";

const ChatWindow = ({ componentStyles, messages }) => {
  const isLoading = useSelector(store => store.isLoading);

  return (
    <VerticalLayout style={componentStyles.container}>
      <ScrollView contentContainerStyle={componentStyles.scrollView}>
        {messages.map((message, idx) => (
          <Message
            key={idx}
            isMy={message.isMy}
            message={message.text}
            btns={idx === 0 ? [{ text: "Show lookup history", onPress: () => {} }] : undefined}
          />
        ))}
      </ScrollView>
      {isLoading && <ChatTypingIndicator />}
    </VerticalLayout>
  );
};

export default props => withTheme(ChatWindow)({ ...props, componentStyles: require("./ChatWindow.styles").styles });
