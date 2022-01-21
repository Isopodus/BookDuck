import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Duck from "./src/Duck";

import { StackNavigator } from "./src/navigation/StackNavigator";

import { theme } from "./src/ui";

export const App = () => {
  useEffect(() => {
    const duck = new Duck();
    duck.proceedDialog("I'm so angry!").then(res => {
      console.log(res);
      duck
        .proceedDialog("My boss said I need to walk 20km a day by foot, I'm getting too tired!")
        .then(res => console.log(res));
    });
  });

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
