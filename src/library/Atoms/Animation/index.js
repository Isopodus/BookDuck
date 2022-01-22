import React, { useMemo } from "react";
import LottieView from "lottie-react-native";
import typing from "../../../assets/animations/typing.json";

export const Animation = ({ name, style }) => {
  const animation = useMemo(() => {
    switch (name) {
      case "typing":
        return typing;
      default:
        return typing;
    }
  }, [name]);

  return <LottieView style={style} source={animation} resizeMode={"cover"} autoPlay loop />;
};
