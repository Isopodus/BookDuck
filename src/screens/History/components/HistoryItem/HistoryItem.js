import React from "react";
import { withTheme } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Text, View } from "react-native";

const HistoryItem = ({ componentStyles }) => (
  <RowLayout style={componentStyles.container}>
    <View>
      <Text style={componentStyles.bookTitle}>Title of book</Text>
      <Text style={componentStyles.author}>Authors</Text>
    </View>
    <PrimaryButton style={componentStyles.btn} text={"text"} onPress={() => {}}>
      <Text style={componentStyles.btnText}>View details</Text>
    </PrimaryButton>
  </RowLayout>
);

export default props => withTheme(HistoryItem)({ ...props, componentStyles: require("./HistoryItem.styles").styles });
