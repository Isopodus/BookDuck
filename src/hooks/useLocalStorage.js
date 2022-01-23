import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = () => {
  const onSetItem = useCallback(async (key, value) => {
    await AsyncStorage.setItem("@" + key, JSON.stringify(value));
  }, []);

  const onGetItem = useCallback(async key => {
    const value = await AsyncStorage.getItem("@" + key);
    return value === null ? null : JSON.parse(value);
  }, []);

  return [onSetItem, onGetItem];
};
