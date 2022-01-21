import { DefaultTheme } from "@react-navigation/native";
import { colors, rgba } from "./colors";
import { fonts } from "./fonts";
import { scale, fullHeight, fullWidth } from "./size";

export const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, ...colors, rgba },
  fonts: { ...DefaultTheme.fonts, ...fonts },
  sizes: { scale, fullHeight, fullWidth },
};
