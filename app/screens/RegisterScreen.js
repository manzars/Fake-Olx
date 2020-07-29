import React, { useState, useContext } from "react";
import { StyleSheet, Image, Platform } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../auth/context";
import authStorage from "../auth/authStorage";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [registerFailed, setRegisterFailed] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const authContext = useContext(AuthContext);
  const registerApi = useApi(authApi.register);
  const addUser = useApi(authApi.addUser);

  const handleSubmit = async ({ name, email, password }) => {
    const result = await registerApi.request(name, email, password);
    if (!result.ok) {
      setErrMsg(result.data.error.message);
      return setRegisterFailed(true);
    }
    const nameResult = await addUser.request(
      result.data.idToken,
      result.data.localId,
      name
    );
    if (!nameResult.ok) {
      setErrMsg(result.data.error.message);
      return setRegisterFailed(true);
    }
    authContext.setName((state) => name);
    setRegisterFailed(false);
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

  let noPadding = false;
  if (Platform.OS === "android") {
    noPadding = true;
  }
  return (
    <React.Fragment>
      <ActivityIndicator visible={registerApi.loading} />
      <Screen style={styles.container} noPadding={noPadding}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={errMsg} visible={registerFailed} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" color={colors.primary} />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
