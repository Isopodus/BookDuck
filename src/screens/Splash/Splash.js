import React, { useEffect } from "react";
import { Text, ImageBackground } from "react-native";
import RowLayout from "../../library/Layouts/RowLayout";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { withTheme } from "../../hoc/withTheme";
import { setAction } from "../../store/actions";

import duck from "../../assets/gif/duck.gif";

const Splash = ({ componentStyles, theme }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => navigate("Chat"), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const { blue, darkblue, yellow, red, green, orange } = theme.colors;
    const backgrounds = [blue, darkblue, green, yellow, red, green, orange];

    dispatch(setAction("theme", backgrounds[Math.floor(Math.random() * backgrounds.length)]));
  }, [dispatch, theme]);

  return (
    <ImageBackground style={componentStyles.screen} source={duck} resizeMode={"cover"}>
      <RowLayout style={componentStyles.titleWrap}>
        <Text style={componentStyles.title}>BookDuck</Text>
        <Text style={componentStyles.dot}>.</Text>
      </RowLayout>
    </ImageBackground>
  );
};

export default props => withTheme(Splash)({ ...props, componentStyles: require("./Splash.styles").styles });
