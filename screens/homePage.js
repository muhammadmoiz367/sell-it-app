import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import colors from '../utils/colors'

const HomePage = () => {
    return (
        <ImageBackground source={require("../images/background.jpg")} style={styles.background} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../images/logo-red.png")} />
                <Text>Buy it. Use it. Sell it</Text>
            </View>
            <View style={styles.loginButton} ></View>
            <View style={styles.registerButton} ></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
    },
    login: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
})


export default HomePage
