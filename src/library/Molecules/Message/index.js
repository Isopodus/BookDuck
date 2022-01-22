import React, { useEffect, useMemo } from "react";
import { Text, View } from "react-native";
import RowLayout from "../../Layouts/RowLayout";
import VerticalLayout from "../../Layouts/VerticalLayout";
import SecondaryButton from "../../Atoms/Button/SecondaryButton";

import { useSelector } from "react-redux";

import { withTheme } from "../../../hoc/withTheme";
import { useAnimation } from "../../../hooks/useAnimation";

const Message = ({ theme, componentStyles, message, btns = [], isMy = false }) => {
  const color = useSelector(state => state.theme);

  const [buttonsAnimation, startButtonsAnimation] = useAnimation(0, 1, 600, 900);
  const [messageAnimation, startMessageAnimation] = useAnimation(theme.sizes.scale(-theme.sizes.fullWidth), 0, 1000);

  const styles = useMemo(() => (isMy ? componentStyles.my : componentStyles.bot), [componentStyles, isMy]);

  useEffect(() => {
    startMessageAnimation();
    btns.length && startButtonsAnimation();
  }, [btns]);

  return (
    <VerticalLayout style={styles.wrapper}>
      <RowLayout style={{ ...styles.container, [isMy ? "marginRight" : "marginLeft"]: messageAnimation }} animated>
        <View style={isMy ? styles.messageTail(color) : styles.messageTail} />
        <View style={isMy ? styles.message(color) : styles.message}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </RowLayout>
      <RowLayout style={{ ...styles.btns, opacity: buttonsAnimation }} animated>
        {btns.map(btn => (
          <SecondaryButton key={btn.text} {...btn} />
        ))}
      </RowLayout>
    </VerticalLayout>
  );
};

export default props => withTheme(Message)({ ...props, componentStyles: require("./styles").styles });
