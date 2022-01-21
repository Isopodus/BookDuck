import React, { useEffect } from "react";
import { Text, ImageBackground } from "react-native";
import RowLayout from "../../library/Layouts/RowLayout";
import { useNavigation } from "@react-navigation/native";

import { withTheme, withLocalStyles } from "../../hoc/withTheme";

import duck from "../../assets/gif/duck.gif";

import { componentStyles } from "./Splash.styles";

const Splash = ({ styles }) => {
  const { navigate } = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => navigate("Chat"), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground style={styles.screen} source={duck} resizeMode={"cover"}>
      <RowLayout style={styles.titleWrap}>
        <Text style={styles.title}>BookDuck</Text>
        <Text style={styles.dot}>.</Text>
      </RowLayout>
    </ImageBackground>
  );
};

export default withTheme(props => withLocalStyles(Splash)({ ...props, styles: componentStyles }));
