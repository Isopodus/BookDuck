import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import RowLayout from "../../../../library/Layouts/RowLayout";
import { Icon } from "../../../../library/Atoms/Icon";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSelector } from "react-redux";

import { withTheme } from "../../../../hoc/withTheme";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

import Tts from "react-native-tts";

const ChatHeader = ({ componentStyles, theme }) => {
  const color = useSelector(state => state.theme);

  const [isVolumeOn, onSetVolumeValue] = useLocalStorage("volume", true);

  useEffect(() => {
    !isVolumeOn && Tts.stop();
  }, [isVolumeOn]);

  return (
    <RowLayout style={componentStyles.component(color)}>
      <Text style={componentStyles.headerTitle}>BookDuck chat</Text>
      <PrimaryButton style={componentStyles.btn} onPress={() => onSetVolumeValue(!isVolumeOn)}>
        <Icon
          name={isVolumeOn ? "ios-volume-high-outline" : "volume-mute-outline"}
          color={theme.colors.white}
          size={theme.sizes.scale(25)}
        />
      </PrimaryButton>
    </RowLayout>
  );
};

export default props => withTheme(ChatHeader)({ ...props, componentStyles: require("./ChatHeader.styles").styles });
