import React from "react";
import { withTheme, withLocalStyles } from "../../../../hoc/withTheme";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";

import { componentStyles } from "./ChatWindow.styles";

const ChatWindow = ({ styles }) => {
  return <VerticalLayout style={styles.container}></VerticalLayout>;
};

export default withTheme(props => withLocalStyles(ChatWindow)({ ...props, styles: componentStyles }));
