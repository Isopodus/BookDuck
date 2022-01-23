import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text } from "react-native";
import RowLayout from "../../../../library/Layouts/RowLayout";
import Input from "../../../../library/Atoms/Input";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Icon } from "../../../../library/Atoms/Icon";
import { Animation } from "../../../../library/Atoms/Animation";

import { withTheme } from "../../../../hoc/withTheme";
import { useOpenClose } from "../../../../hooks/useOpenClose";

const ChatInput = ({ theme, componentStyles, onNewMessage }) => {
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(0);

  const [voiceView, openVoiceView, closeVoiceView] = useOpenClose(false);

  const formattedTimer = useMemo(() => {
    const minutes = `${Math.floor(timer / 60)}`;
    const seconds = `${timer - Math.floor(timer / 60) * 60}`;

    return (minutes.length === 1 ? "0" + minutes : minutes) + ":" + (seconds.length === 1 ? "0" + seconds : seconds);
  }, [timer]);

  const onChange = useCallback((name, value) => setMessage(value), []);

  useEffect(() => {
    let interval = null;

    if (voiceView) interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    else {
      setTimer(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [voiceView]);

  return (
    <RowLayout style={{ ...componentStyles.container, ...(voiceView ? componentStyles.containerVoice : {}) }}>
      {voiceView ? (
        <>
          <PrimaryButton style={componentStyles.btn} onPress={closeVoiceView}>
            <Icon name="trash" color={theme.colors.white} size={theme.sizes.scale(22)} />
          </PrimaryButton>
          <RowLayout style={componentStyles.voiceAnimation}>
            <Animation name="voice" />
          </RowLayout>
          <Text style={componentStyles.timerText}>{formattedTimer}</Text>
          <PrimaryButton style={componentStyles.btn} onPress={() => {}}>
            <Icon name="paper-plane-outline" color={theme.colors.white} size={theme.sizes.scale(22)} />
          </PrimaryButton>
        </>
      ) : (
        <>
          <Input name="message" placeholder={"Type your message here..."} onChange={onChange} text={message} />
          <PrimaryButton
            style={{ ...componentStyles.btn, ...componentStyles.sendTextBtn }}
            onPress={() => {
              if (message.trim().length > 0) {
                onNewMessage(message);
                setMessage("");
              }
            }}
          >
            <Icon name="paper-plane-outline" color={theme.colors.white} size={theme.sizes.scale(22)} />
          </PrimaryButton>
          <PrimaryButton style={componentStyles.btn} text={"text"} onPress={openVoiceView}>
            <Icon name="microphone-outline" color={theme.colors.white} size={theme.sizes.scale(25)} />
          </PrimaryButton>
        </>
      )}
    </RowLayout>
  );
};

export default props => withTheme(ChatInput)({ ...props, componentStyles: require("./ChatInput.styles").styles });
