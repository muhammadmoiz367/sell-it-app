import React from 'react'
import { StyleSheet, View } from 'react-native'

import LottieView from 'lottie-react-native'

const ActivityIndicator = ({visible=true}) => {
    if(!visible) return null
    return (
        <View style={styles.overlay}>
            <LottieView
                autoPlay
                loop
                source={require('../assets/animations/loader.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    overlay:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: "white",
        opacity: 0.7,
        zIndex: 1
    }
})

export default ActivityIndicator

