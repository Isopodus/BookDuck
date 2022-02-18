import React from "react";
import ScreenLayout from "../../library/Layouts/ScreenLayout";

import { withTheme } from "../../hoc/withTheme";

const Splash = ({ componentStyles, theme }) => {
  return <ScreenLayout></ScreenLayout>;
};

export default props => withTheme(Splash)({ ...props, componentStyles: require("./Splash.styles").styles });
