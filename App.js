import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from "./src/navigation/StackNavigator";

import { theme } from "./src/ui";

export const App = () => (
  <NavigationContainer theme={theme}>
    <StackNavigator />
  </NavigationContainer>
);
