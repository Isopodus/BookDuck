import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/Splash/Splash";
import Chat from "../screens/Chat/Chat";
import History from "../screens/History/History";

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName={"Splash"} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="History" component={History} />
  </Stack.Navigator>
);
