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
import Tts from "react-native-tts";

const Chat = ({ componentStyles }) => {
  const color = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [bookId, setBookId] = useState([]);
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
        console.log(response);
        let newMessages = [...messages];
        if (response.answer) {
          newMessages = [...newMessages, { text: response.answer }];
        }
        if (response.books.length > 0) {
          newMessages = [
            ...newMessages,
            {
              text: `Title: ${response.books[0].title}`,
              buttons: [
                {
                  text: "Show book details",
                  onPress: () => {
                    setBookId(response.books[0].id);
                    openBookModal();
                  },
                },
              ],
            },
          ];
        }

        setMessages(newMessages);
      });
    },
    [duck, messages, setMessages, setBookId, openBookModal],
  );

  useEffect(() => {
    setMessages([
      {
        text: "Hello there! I'm the BookDuck, your itelligent book lookup helper! I will suggest you a book after a small conversation.",
        buttons: [{ text: "Show lookup history", onPress: () => {} }],
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
      <BookModal open={bookModal} toggleModal={closeBookModal} bookId={bookId} />
    </>
  );
};

export default props => withTheme(Chat)({ ...props, componentStyles: require("./Chat.styles").styles });
