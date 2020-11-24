import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import {Formik} from  'formik'
import * as Yup from 'yup'


import AppButton from '../components/buttons'
import Screen from '../components/screen'
import AppFormField from '../components/appFormField'

const validationSchema=Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).max(7).label("Password")
})

const LoginPage = () => {
    return (
        <Screen style={styles.container}>
            <KeyboardAvoidingView behavior="position">
                <Image source={require('../images/logo-red.png')} style={styles.logo} />
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values)=>console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({handleChange, handleSubmit})=>(
                        <>
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
                            <AppButton text="Login" onPress={handleSubmit} />
                        </>
                    )}
                </Formik>
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
