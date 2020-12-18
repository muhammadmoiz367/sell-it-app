import React, { useState } from "react";
import { Image, KeyboardAvoidingView, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppSubmitButton as SubmitButton,
  ErrorMessage,
} from "../components/form";
import Auth from '../api/auth'
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/activityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignUp() {
  const {logIn}=useAuth()
  const signUpApi=useApi(Auth.signUp);
  const loginApi=useApi(Auth.login)
  const [signUpError, setSignUpError]=useState(false)

  const handleSubmit=async ({name, email, password})=>{
    const userInfo={
      name, 
      email, 
      password
    }
    const result = await signUpApi.request(userInfo);
    if(!result.ok){
      if(result.data)
        setSignUpError(result.data.error)
      else{
        setSignUpError('An unexpected error expected');
        console.log(result)
      }
      return
    }
    const {data: authToken}=await loginApi.request(email, password)
    logIn(authToken)
}

  return (
    <>
      <ActivityIndicator visible={loginApi.loading || signUpApi.loading} />
      <Screen style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Image source={require('../assets/images/logo-red.png')} style={styles.logo} />
          <Form
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Name"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Register" />
            <ErrorMessage error={signUpError} visible={signUpError} />
          </Form>
        </KeyboardAvoidingView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
  logo:{
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30
}
});

export default SignUp;
