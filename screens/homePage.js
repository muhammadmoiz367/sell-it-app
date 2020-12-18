import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import AppButton from '../components/buttons'
import route from '../navigation/routes'
import colors from '../utils/colors'

const HomePage = ({navigation}) => {
    return (
        <ImageBackground source={require("../assets/images/background.jpg")} style={styles.background} blurRadius={10} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/logo-red.png")} />
                <Text style={styles.tagline} >Buy it. Use it. Sell it</Text>
            </View>
            <View style={styles.buttonContainer} >
                <AppButton text="login" onPress={()=>navigation.navigate(route.LOG_IN)} />
                <AppButton text="register" color="secondary" onPress={()=>navigation.navigate(route.SIGN_UP)} />
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
        paddingVertical: 10,
        color: colors.dark
    }
})


export default HomePage
