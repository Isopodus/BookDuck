import React, { useEffect, useMemo } from "react";
import { useTheme } from "@react-navigation/native";

export const withTheme = Component => props => {
  const theme = useTheme();

  return <Component {...props} theme={theme} />;
};

export const withLocalStyles = Component => props => {
  const { theme, styles, ...restProps } = props;

  const localStyles = useMemo(() => styles(theme), [styles, theme]);

  return <Component {...restProps} theme={theme} styles={localStyles} />;
};
