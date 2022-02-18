import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenLayout from "../../library/Layouts/ScreenLayout";
import VerticalLayout from "../../library/Layouts/VerticalLayout";
import Input from "../../library/Atoms/Input";
import PrimaryButton from "../../library/Atoms/Button/PrimaryButton";
import Checkbox from "../../library/Atoms/Checkbox";

import { withTheme } from "../../hoc/withTheme";
import { useToggle } from "../../hooks/useToggle";

const Auth = ({ componentStyles, theme }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSignUpForm, toggleLoginForm] = useToggle(false);

  return (
    <ScreenLayout style={componentStyles.screen}>
      <VerticalLayout style={componentStyles.wrapper}>
        <Text style={componentStyles.title}>{showSignUpForm ? "Sign up" : "Log in"}</Text>

        <VerticalLayout style={componentStyles.form}>
          {!showSignUpForm && (
            <Text style={componentStyles.subtitle}>
              Hello again! Just do one little step to enjoy the whole features of our app.
            </Text>
          )}
          {showSignUpForm && (
            <Input
              value={username}
              placeholder={"amazing_axolotl"}
              helper={"Insert your app nickname"}
              icon={"account-outline"}
              onChange={setUsername}
            />
          )}
          <Input
            value={email}
            placeholder={"amazing.axolotl@mail.com"}
            helper={showSignUpForm ? "Insert your email" : "Insert your account email"}
            icon={"email-outline"}
            onChange={setEmail}
          />
          <Input type={"password"} value={password} placeholder={"Your password"} onChange={setPassword} />
        </VerticalLayout>

        <VerticalLayout>
          <PrimaryButton text={"Submit"} style={componentStyles.btnSubmit} />
          <TouchableOpacity onPress={toggleLoginForm}>
            <Text style={componentStyles.btnSwitch}>{showSignUpForm ? "or Log in" : "or Sign up"}</Text>
          </TouchableOpacity>
        </VerticalLayout>
      </VerticalLayout>

      <Text style={componentStyles.label}>AppName</Text>
    </ScreenLayout>
  );
};

export default props => withTheme(Auth)({ ...props, componentStyles: require("./Auth.styles").styles });
