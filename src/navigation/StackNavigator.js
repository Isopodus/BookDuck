import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/Splash/Splash";
import Auth from "../screens/Auth/Auth";

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName={"Splash"} screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Auth" component={Auth} />
  </Stack.Navigator>
);
