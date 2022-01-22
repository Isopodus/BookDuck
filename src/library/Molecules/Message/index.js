import React, { useMemo } from "react";
import { Text, View } from "react-native";
import RowLayout from "../../Layouts/RowLayout";
import VerticalLayout from "../../Layouts/VerticalLayout";
import SecondaryButton from "../../Atoms/Button/SecondaryButton";

import { useSelector } from "react-redux";

import { withTheme } from "../../../hoc/withTheme";

const Message = ({ componentStyles, message, btns = [], isMy = false }) => {
  const color = useSelector(state => state.theme);

  const styles = useMemo(() => (isMy ? componentStyles.my : componentStyles.bot), [componentStyles, isMy]);
  return (
    <VerticalLayout style={styles.wrapper}>
      <RowLayout style={styles.container}>
        <View style={isMy ? styles.messageTail(color) : styles.messageTail} />
        <View style={isMy ? styles.message(color) : styles.message}>
          <Text style={styles.text}>{message}</Text>
        </View>
      </RowLayout>
      <RowLayout style={styles.btns}>
        {btns.map(btn => (
          <SecondaryButton key={btn.text} {...btn} />
        ))}
      </RowLayout>
    </VerticalLayout>
  );
};

export default props => withTheme(Message)({ ...props, componentStyles: require("./styles").styles });
