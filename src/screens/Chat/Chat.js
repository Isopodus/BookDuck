import React, { useCallback, useEffect, useState } from "react";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";
import BookModal from "./components/BookModal/BookModal";
import ChatHeader from "./components/ChatHeader/ChatHeader";

import { useDispatch, useSelector } from "react-redux";

import { withTheme } from "../../hoc/withTheme";
import { setAction } from "../../store/actions";
import { useOpenClose } from "../../hooks/useOpenClose";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import Duck from "../../Duck";
import Tts from "react-native-tts";

const Chat = ({ componentStyles }) => {
  const color = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [bookId, setBookId] = useState([]);
  const [duck] = useState(new Duck(loadingState => dispatch(setAction("loading", loadingState))));

  const [isVolumeOn] = useLocalStorage("volume", true);
  const [history, onUpdateHistory] = useLocalStorage("history", []);

  const [bookModal, openBookModal, closeBookModal] = useOpenClose(false);

  useEffect(() => {
    const defaultMessages = [
      {
        text: "Hello there! I'm the BookDuck, your itelligent book lookup helper! I will suggest you a book after a small conversation.",
        buttons: [{ text: "Show lookup history", onPress: () => {} }],
      },
      { text: "How do you do?" },
    ];
    setMessages(defaultMessages);

    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage("en-US");
      Tts.setDefaultVoice("en-us-x-tpd-network");
      Tts.setDefaultPitch(1.5);

      isVolumeOn && defaultMessages.forEach(message => Tts.speak(message.text));
    });
  }, []);

  const onNewMessage = useCallback(
    userMessage => {
      Tts.stop();
      setMessages([...messages, { text: userMessage, isMy: true }]);
    },
    [messages, setMessages],
  );

  const tellTheDuck = useCallback(
    userMessage => {
      duck.proceedDialog(userMessage).then(response => {
        let newMessages = [...messages];
        if (response.answer) {
          newMessages = [...newMessages, { text: response.answer }];
          isVolumeOn && Tts.speak(response.answer);
        }
        if (response.books.length > 0) {
          const selectedBook = response.books[Math.floor(Math.random() * response.books.length)];
          onUpdateHistory([...history, selectedBook]);
          isVolumeOn && Tts.speak(selectedBook.title);

          const dialogContinueMessage = "Tell me anything else if you want to find another one!";
          isVolumeOn && Tts.speak(dialogContinueMessage);
          duck.resetDialog(1);

          newMessages = [
            ...newMessages,
            {
              text: `Title: ${selectedBook.title}`,
              buttons: [
                {
                  text: "Show book details",
                  onPress: () => {
                    setBookId(selectedBook.id);
                    openBookModal();
                  },
                },
              ],
            },
            {
              text: dialogContinueMessage,
            },
          ];
        }

        setMessages(newMessages);
      });
    },
    [duck, messages, setMessages, setBookId, openBookModal, history],
  );

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.isMy) {
      tellTheDuck(lastMessage.text);
    }
  }, [messages]);

  return (
    <>
      <VerticalLayout style={componentStyles.screen(color)}>
        <ChatHeader />
        <ChatWindow messages={messages} />
        <ChatInput onNewMessage={onNewMessage} />
      </VerticalLayout>
      <BookModal open={bookModal} toggleModal={closeBookModal} bookId={bookId} />
    </>
  );
};

export default props => withTheme(Chat)({ ...props, componentStyles: require("./Chat.styles").styles });
