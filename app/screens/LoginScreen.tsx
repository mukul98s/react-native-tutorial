import * as React from "react";
import {Image, StyleSheet} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.image} />
      <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={LoginValidationSchema}
      >
        {() => (
          <>
            <AppFormField
              placeholder="Email"
              name="email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppFormField
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              icon="lock"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  container: {
    padding: 20,
  },
});

export default LoginScreen;
