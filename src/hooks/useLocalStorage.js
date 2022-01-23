import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = (key, defaultValue = null) => {
  const [itemValue, setItemValue] = useState(defaultValue);

  const onSetItem = useCallback(
    async value => {
      setItemValue(value);
      await AsyncStorage.setItem("@" + key, JSON.stringify(value));
    },
    [setItemValue],
  );

  useEffect(() => {
    AsyncStorage.getItem("@" + key).then(value => {
      // console.log(key, value);
      setItemValue(value === null ? defaultValue : JSON.parse(value));
    });
  }, []);

  return [itemValue, onSetItem];
};
