import React, { useCallback } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import RowLayout from "../../library/Layouts/RowLayout";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import { Icon } from "../../library/Atoms/Icon";
import HistoryItem from "./components/HistoryItem/HistoryItem";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { withTheme } from "../../hoc/withTheme";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const History = ({ componentStyles, theme }) => {
  const { navigate } = useNavigation();
  const color = useSelector(state => state.theme);

  const [history] = useLocalStorage("history", []);

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
        {history.length ? (
          history.map(({ id, ...restProps }) => <HistoryItem key={id} {...restProps} />)
        ) : (
          <Text style={componentStyles.emptyText}>Looks like there are no books here yet :(</Text>
        )}
      </ScrollView>
    </VerticalLayout>
  );
};

export default props => withTheme(History)({ ...props, componentStyles: require("./History.styles").styles });
