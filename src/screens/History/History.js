import React, { useCallback } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import RowLayout from "../../library/Layouts/RowLayout";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import { Icon } from "../../library/Atoms/Icon";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { withTheme } from "../../hoc/withTheme";
import HistoryItem from "./components/HistoryItem/HistoryItem";

const History = ({ componentStyles, theme }) => {
  const { navigate } = useNavigation();
  const color = useSelector(state => state.theme);

  const onGoBack = useCallback(() => navigate("Chat"), []);

  return (
    <VerticalLayout style={componentStyles.screen(color)}>
      <RowLayout style={componentStyles.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Icon name="close" color={theme.colors.black} size={theme.sizes.scale(35)} />
        </TouchableOpacity>
        <Text style={componentStyles.headerTitle}>History</Text>
      </RowLayout>
      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <HistoryItem />
        ))}
      </ScrollView>
    </VerticalLayout>
  );
};

export default props => withTheme(History)({ ...props, componentStyles: require("./History.styles").styles });
