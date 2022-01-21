import React, { useCallback, useState } from "react";
import { withTheme, withLocalStyles } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import Input from "../../../../library/Atoms/Input";

import { componentStyles } from "./ChatInput.styles";

const ChatInput = ({ styles }) => {
  const [message, setMessage] = useState("");

  const onChange = useCallback((name, value) => setMessage(value), []);

  return (
    <RowLayout style={styles.container}>
      <Input name="message" placeholder={"Type your message here..."} onChange={onChange} />
    </RowLayout>
  );
};

export default withTheme(props => withLocalStyles(ChatInput)({ ...props, styles: componentStyles }));
