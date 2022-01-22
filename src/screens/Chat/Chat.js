import React, { useCallback, useEffect, useState } from "react";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";
import BookModal from "./components/BookModal/BookModal";

import { useDispatch, useSelector } from "react-redux";

import { withTheme } from "../../hoc/withTheme";
import { setAction } from "../../store/actions";
import { useOpenClose } from "../../hooks/useOpenClose";

import Duck from "../../Duck";

const Chat = ({ componentStyles }) => {
  const color = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [duck] = useState(new Duck(loadingState => dispatch(setAction("loading", loadingState))));

  const [bookModal, openBookModal, closeBookModal] = useOpenClose(false);

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

  return (
    <>
      <VerticalLayout style={componentStyles.screen(color)}>
        <ChatWindow messages={messages} />
        <ChatInput onNewMessage={onNewMessage} />
      </VerticalLayout>
      <BookModal open={bookModal} toggleModal={closeBookModal} />
    </>
  );
};

export default props => withTheme(Chat)({ ...props, componentStyles: require("./Chat.styles").styles });
