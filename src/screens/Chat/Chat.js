import React, { useCallback, useEffect, useState } from "react";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import { withTheme } from "../../hoc/withTheme";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "../../store/actions";

import Duck from "../../Duck";

import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";

const Chat = ({ componentStyles }) => {
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [duck] = useState(new Duck(loadingState => dispatch(setAction("loading", loadingState))));

  useEffect(() => {
    setMessages([
      {
        text: "Hello there! I'm the BookDuck, your itelligent book lookup helper! I will suggest you a book after a small conversation.",
      },
      { text: "How do you do?" },
    ]);
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.isMy) {
      tellTheDuck(lastMessage.text);
    }
  }, [messages]);

  const onNewMessage = useCallback(
    userMessage => {
      setMessages([...messages, { text: userMessage, isMy: true }]);
    },
    [messages, setMessages],
  );

  const tellTheDuck = useCallback(
    userMessage => {
      duck.proceedDialog(userMessage).then(response => {
        if (response.answer) {
          setMessages([...messages, { text: response.answer }]);
        }
      });
    },
    [duck, messages, setMessages],
  );

  const color = useSelector(state => state.theme);
  return (
    <VerticalLayout style={componentStyles.screen(color)}>
      <ChatWindow messages={messages} />
      <ChatInput onNewMessage={onNewMessage} />
    </VerticalLayout>
  );
};

export default props => withTheme(Chat)({ ...props, componentStyles: require("./Chat.styles").styles });
