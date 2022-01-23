import React, { useCallback, useEffect, useState } from "react";
import { BackHandler, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const withPressBackListener = Component => props => {
  const navigation = useNavigation();

  const [firstTime, setFirstTime] = useState(false);

  const handleBackButtonClick = useCallback(
    e => {
      e.preventDefault();

      if (firstTime) {
        BackHandler.exitApp();
        return;
      }

      ToastAndroid.show("Press Back again to exit", ToastAndroid.SHORT);
      setFirstTime(true);
    },
    [firstTime],
  );

  useEffect(() => {
    navigation.addListener("beforeRemove", handleBackButtonClick);
    return () => navigation.addListener("beforeRemove", handleBackButtonClick);
  }, [handleBackButtonClick]);

  return <Component {...props} />;
};
