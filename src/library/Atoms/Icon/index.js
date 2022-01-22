import React, { useMemo } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Icon = ({ name, color, size, ...props }) => {
  const IconContainer = useMemo(() => {
    if (name === "paper-plane-outline") return Ionicons;
    if (name === "microphone-outline" || name === "duck") return MaterialCommunityIcons;
  }, [name]);

  return <IconContainer name={name} color={color} size={size} {...props} />;
};
