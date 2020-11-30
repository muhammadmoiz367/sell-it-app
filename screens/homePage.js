import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import AppButton from '../components/lists/buttons'

const HomePage = () => {
    return (
        <ImageBackground source={require("../images/background.jpg")} style={styles.background} blurRadius={10} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../images/logo-red.png")} />
                <Text style={styles.tagline} >Buy it. Use it. Sell it</Text>
            </View>
            <View style={styles.buttonContainer} >
                <AppButton text="login" onPress={()=>console.log('login btn pressed !')} />
                <AppButton text="register" color="secondary" onPress={()=>console.log('signup btn pressed !')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: 715,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        padding: 10
    },
    tagline: {
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 10
    }
})


export default HomePage
