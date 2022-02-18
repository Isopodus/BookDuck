import React, { useMemo } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const IoniconsEnum = ["paper-plane-outline", "close", "volume-mute-outline", "ios-volume-high-outline"];
const MaterialCommunityIconsEnum = [
  "account-outline",
  "microphone-outline",
  "duck",
  "email-outline",
  "eye-outline",
  "eye-off-outline",
];
const FeatherEnum = ["trash"];

export const Icon = ({ name, color, size, ...props }) => {
  const IconContainer = useMemo(() => {
    switch (true) {
      case IoniconsEnum.includes(name):
        return Ionicons;
      case MaterialCommunityIconsEnum.includes(name):
        return MaterialCommunityIcons;
      case FeatherEnum.includes(name):
        return Feather;
      default:
        return MaterialCommunityIcons;
    }
  }, [name]);

  return <IconContainer name={name} color={color} size={size} {...props} />;
};
