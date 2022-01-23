import React, { useRef } from "react";
import { ScrollView } from "react-native";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";
import Message from "../../../../library/Molecules/Message";
import ChatTypingIndicator from "../ChatTypingIndicator/ChatTypingIndicator";

import { useSelector } from "react-redux";

import { withTheme } from "../../../../hoc/withTheme";

const ChatWindow = ({ componentStyles, messages }) => {
  const isLoading = useSelector(store => store.isLoading);
  const scrollViewRef = useRef();

  return (
    <VerticalLayout style={componentStyles.container}>
      <ScrollView
        contentContainerStyle={componentStyles.scrollView}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        keyboardShouldPersistTaps={"handled"}
      >
        {messages.map((message, idx) => (
          <Message key={idx} isMy={message.isMy} message={message.text} btns={message.buttons} />
        ))}
      </ScrollView>
      {isLoading && <ChatTypingIndicator />}
    </VerticalLayout>
  );
};

export default props => withTheme(ChatWindow)({ ...props, componentStyles: require("./ChatWindow.styles").styles });
