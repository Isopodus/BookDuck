import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = (startValue, endValue, duration, delay = 0) => {
  const animation = useRef(new Animated.Value(startValue)).current;

  const [start, setStart] = useState(false);

  const startAnimation = useCallback(() => setStart(true), []);

  useEffect(() => {
    if (!start) return;
    Animated.timing(animation, {
      toValue: endValue,
      easing: Easing.linear(),
      duration,
      delay,
      useNativeDriver: false,
    }).start();
  }, [start, animation, endValue]);

  return [animation, startAnimation];
};
