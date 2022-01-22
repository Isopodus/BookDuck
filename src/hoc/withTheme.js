import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";

export const withTheme =
  Component =>
  ({ componentStyles, ...props }) => {
    const theme = useTheme();

    const localStyles = useMemo(() => componentStyles(theme), [componentStyles, theme]);

    return <Component {...props} theme={theme} componentStyles={localStyles} />;
  };
