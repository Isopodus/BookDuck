import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Duck from "./src/Duck";
import Tts from "react-native-tts";

import { StackNavigator } from "./src/navigation/StackNavigator";

import { theme } from "./src/ui";

export const App = () => {
  useEffect(() => {
    // Tts.voices().then(voices => voices.forEach(voice => voice.name.startsWith("en-us-x") && console.log(voice.name)));
    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage("en-US");
      Tts.setDefaultVoice("en-us-x-tpd-network");
      Tts.setDefaultPitch(1.5);
      Tts.speak("Hello there! I'm the BookDuck");
    });

    // const duck = new Duck();
    // duck.proceedDialog("I'm so happy! Got my new car, so I can travel across the whole country!").then(res => {
    //   console.log(res);

    //   // duck.proceedDialog("I want to get a better salary!").then(res => console.log(res));
    // });
  });

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
