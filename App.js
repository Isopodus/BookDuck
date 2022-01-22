import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Duck from "./src/Duck";

import { StackNavigator } from "./src/navigation/StackNavigator";

import { theme } from "./src/ui";

export const App = () => {
  useEffect(() => {
    const duck = new Duck();
    duck.proceedDialog("I'm so happy! Got my new car, so I can travel across the whole country!").then(res => {
      console.log(res);
      // duck.proceedDialog("I want to get a better salary!").then(res => console.log(res));
    });
  });

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
