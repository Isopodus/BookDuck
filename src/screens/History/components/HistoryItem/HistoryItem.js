import React, { useMemo } from "react";
import { withTheme } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Text, View } from "react-native";

const HistoryItem = ({ componentStyles, title, authors }) => {
  const authorsList = useMemo(() => authors.map(author => author.name).join(", "), [authors]);

  return (
    <RowLayout style={componentStyles.container}>
      <View style={componentStyles.bookInfo}>
        <Text style={componentStyles.bookTitle}>{title}</Text>
        <Text style={componentStyles.author}>{authorsList}</Text>
      </View>
      <PrimaryButton style={componentStyles.btn} text={"text"} onPress={() => {}}>
        <Text style={componentStyles.btnText}>View details</Text>
      </PrimaryButton>
    </RowLayout>
  );
};

export default props => withTheme(HistoryItem)({ ...props, componentStyles: require("./HistoryItem.styles").styles });
