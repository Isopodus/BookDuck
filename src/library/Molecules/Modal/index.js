import React, { useEffect, useMemo } from "react";
import VerticalLayout from "../../Layouts/VerticalLayout";

import { useSelector } from "react-redux";

import { withTheme } from "../../../hoc/withTheme";
import { useAnimation } from "../../../hooks/useAnimation";

const Modal = ({ open, style, componentStyles, children }) => {
  const color = useSelector(state => state.theme);

  const [openAnimation, startOpenAnimation] = useAnimation(0, 1, 600);

  useEffect(() => {
    if (!open) return;
    startOpenAnimation();
  }, [open]);

  if (!open) return null;
  return (
    <VerticalLayout style={{ ...componentStyles.modal(color), ...style, opacity: openAnimation }} animated>
      {children}
    </VerticalLayout>
  );
};

export default props => withTheme(Modal)({ ...props, componentStyles: require("./styles").styles });
