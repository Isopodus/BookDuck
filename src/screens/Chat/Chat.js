import React from "react";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import { withTheme } from "../../hoc/withTheme";

import { useSelector } from "react-redux";

import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";

const Chat = ({ componentStyles }) => {
  const color = useSelector(state => state.theme);
  return (
    <VerticalLayout style={componentStyles.screen(color)}>
      <ChatWindow />
      <ChatInput />
    </VerticalLayout>
  );
};

export default props => withTheme(Chat)({ ...props, componentStyles: require("./Chat.styles").styles });
