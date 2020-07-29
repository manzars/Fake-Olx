import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Image, Platform } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import ErrorMessage from "../components/ErrorMessage";

import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/authStorage";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const authContext = useContext(AuthContext);
  const loginApi = useApi(authApi.login);

  let noPadding = false;
  if (Platform.OS === "android") {
    noPadding = true;
  }

  const handleSubmit = async ({ email, password }) => {
    const result = await loginApi.request(email, password);
    if (!result.ok) {
      setErrMsg(result.data.error.message);
      return setLoginFailed(true);
    }
    setLoginFailed(false);
    setErrMsg("");
    const user = jwtDecode(result.data.idToken);
    authContext.setUser(user);
    authStorage.storeToken(result.data.idToken);
    authStorage.storeLocalId(result.data.localId);
    const expirationDate = new Date(
      new Date().getTime() + result.data.expiresIn * 1000
    );
    authStorage.storeExpirationDate(expirationDate);
  };

  return (
    <React.Fragment>
      <ActivityIndicator visible={loginApi.loading} />
      <Screen style={styles.container} noPadding={noPadding}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={errMsg} visible={loginFailed} />
          <AppFormField
            placeholder="Email"
            icon="email"
            name="email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            placeholder="Password"
            icon="lock"
            name="password"
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton color={colors.primary} title="Login" />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});

export default LoginScreen;
