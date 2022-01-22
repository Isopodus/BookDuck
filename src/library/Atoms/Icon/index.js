import React, { useMemo } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

export const Icon = ({ name, color, size, ...props }) => {
  const IconContainer = useMemo(() => {
    if (name === "paper-plane-outline" || name === "close") return Ionicons;
    if (name === "microphone-outline" || name === "duck") return MaterialCommunityIcons;
    if (name === "slightly-smile" || name === "smiley" || name === "smiling") return Fontisto;
  }, [name]);

  return <IconContainer name={name} color={color} size={size} {...props} />;
};
