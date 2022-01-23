import React, { useCallback, useEffect, useState } from "react";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatInput from "./components/ChatInput/ChatInput";
import BookModal from "./components/BookModal/BookModal";
import ChatHeader from "./components/ChatHeader/ChatHeader";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { withTheme } from "../../hoc/withTheme";
import { withPressBackListener } from "../../hoc/withPressBackListener";
import { setAction } from "../../store/actions";
import { useOpenClose } from "../../hooks/useOpenClose";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import Duck from "../../models/Duck";
import Tts from "react-native-tts";
import { Keyboard } from "react-native";

import Sound from "react-native-sound";
import _ from "denodeify";

const Chat = ({ componentStyles }) => {
  const color = useSelector(state => state.theme);
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const [quack, setQuack] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [duck] = useState(new Duck(loadingState => dispatch(setAction("loading", loadingState))));

  const [isVolumeOn] = useLocalStorage("volume", true);
  const [history, onUpdateHistory] = useLocalStorage("history", []);

  const [bookModal, openBookModal, closeBookModal] = useOpenClose(false);

  useEffect(() => {
    const defaultMessages = [
      {
        text: "Hello there! I'm the BookDuck, your itelligent book lookup helper! I will suggest you a book after a small conversation.",
        buttons: [{ text: "Show lookup history", onPress: () => navigate("History") }],
      },
      { text: "How do you do?" },
    ];

    // Set the default duck messages on startup
    setMessages(defaultMessages);

    // Initialize and play TTS messages if volume is enabled\
    Sound.setCategory("Playback");
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage("en-US");
      Tts.setDefaultVoice("en-us-x-tpd-network");
      Tts.setDefaultPitch(1.5);

      const quack = new Sound("duck.mp3", Sound.MAIN_BUNDLE, err => {
        if (isVolumeOn) {
          !err &&
            quack.play(() => {
              defaultMessages.forEach(message => Tts.speak(message.text));
            });
        }
      });
      setQuack(quack);
    });
  }, []);

  const onNewMessage = useCallback(
    userMessage => {
      Tts.stop();
      setMessages([...messages, { text: userMessage, isMy: true }]);
    },
    [messages, setMessages],
  );

  const waitForDuckAnswer = useCallback(
    userMessage => {
      duck.proceedDialog(userMessage).then(response => {
        let newMessages = [...messages];
        if (response.answer) {
          newMessages = [...newMessages, { text: response.answer }];
          isVolumeOn && quack.play() && Tts.speak(response.answer);
        }
        if (response.books.length > 0) {
          const selectedBook = response.books[Math.floor(Math.random() * response.books.length)];
          api.getBookData(selectedBook.id).then(book => {
            const bookData = book.data;
            setSelectedBook(bookData);
            onUpdateHistory([...history, bookData]);
          });

          const dialogContinueMessage = "Tell me anything else if you want to find another one!";
          isVolumeOn && Tts.speak(selectedBook.title) && Tts.speak(dialogContinueMessage);
          duck.resetDialog(1);

          newMessages = [
            ...newMessages,
            {
              text: `Title: ${selectedBook.title}`,
              buttons: [
                {
                  text: "Show book details",
                  onPress: () => {
                    Keyboard.dismiss();
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
    [duck, messages, setMessages, openBookModal, history, isVolumeOn],
  );

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.isMy) {
      waitForDuckAnswer(lastMessage.text);
    }
  }, [messages]);

  return (
    <>
      <VerticalLayout style={componentStyles.screen(color)}>
        <ChatHeader />
        <ChatWindow messages={messages} />
        <ChatInput onNewMessage={onNewMessage} />
      </VerticalLayout>
      <BookModal open={bookModal} toggleModal={closeBookModal} book={selectedBook} />
    </>
  );
};

export default withPressBackListener(props =>
  withTheme(Chat)({ ...props, componentStyles: require("./Chat.styles").styles }),
);
