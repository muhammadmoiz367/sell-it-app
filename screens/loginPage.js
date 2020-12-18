import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/screen'
import {AppForm, AppFormField, AppSubmitButton, ErrorMessage} from '../components/form'
import Auth from '../api/auth'
import useAuth from '../auth/useAuth'

const validationSchema=Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).max(7).label("Password")
})

const LoginPage = () => {
    const {logIn}=useAuth()
    const [loginError, setLoginError]=useState(false)
    
    const handleSubmit=async ({email, password})=>{
        const result=await Auth.login(email, password);
        if(!result.ok)
            return setLoginError(true)
        setLoginError(false)
        logIn(result.data)
    }
    return (
        <Screen style={styles.container}>
            <KeyboardAvoidingView behavior="position">
                <Image source={require('../assets/images/logo-red.png')} style={styles.logo} />
                <AppForm
                    initialValues={{email: '', password: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        icon="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="email"
                        placeholder="Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        icon="lock"
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <AppSubmitButton title="Login" />
                    <ErrorMessage error="Invalid email or password. Try again" visible={loginError} />
                </AppForm>
            </KeyboardAvoidingView>
        </Screen>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo:{
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 30
    }
})
