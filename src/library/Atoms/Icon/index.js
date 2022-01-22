import React, { useMemo } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Icon = ({ name, color, size, ...props }) => {
  const IconContainer = useMemo(() => {
    if (name === "paper-plane-outline") return Ionicons;
    if (name === "microphone-outline" || name === "duck") return MaterialCommunityIcons;
    if (name === "trash") return Feather;
  }, [name]);

  return <IconContainer name={name} color={color} size={size} {...props} />;
};
