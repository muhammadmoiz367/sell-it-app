import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import colors from '../utils/colors'

const ViewImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backBtn} ></View>
            <View style={styles.deleteBtn} ></View>
            <Image source={require('../images/chair.jpg')} resizeMode="contain" style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white
    },
    backBtn:{
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top:40,
        left: 30
    },
    deleteBtn:{
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top:40,
        right: 30
    },
    image:{
        width: '100%',
        height: '100%'
    }
})


export default ViewImage
