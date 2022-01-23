import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { StackNavigator } from "./src/navigation/StackNavigator";

import { theme } from "./src/ui";
import { store } from "./src/store";

export const App = () => (
  <Provider store={store}>
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);
