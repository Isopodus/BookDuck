import React from "react";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import { withTheme, withLocalStyles } from "../../hoc/withTheme";

import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";

import { componentStyles } from "./Chat.styles";

const Chat = ({ styles }) => (
  <VerticalLayout style={styles.screen}>
    <ChatWindow />
    <ChatInput />
  </VerticalLayout>
);

export default withTheme(props => withLocalStyles(Chat)({ ...props, styles: componentStyles }));
