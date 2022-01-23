import React from "react";
import VerticalLayout from "../../Layouts/VerticalLayout";

import { useSelector } from "react-redux";

import { withTheme } from "../../../hoc/withTheme";

const Modal = ({ open, style, componentStyles, children }) => {
  const color = useSelector(state => state.theme);

  if (!open) return null;
  return <VerticalLayout style={{ ...componentStyles.modal(color), ...style }}>{children}</VerticalLayout>;
};

export default props => withTheme(Modal)({ ...props, componentStyles: require("./styles").styles });
