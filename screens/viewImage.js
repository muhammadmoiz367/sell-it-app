import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../utils/colors'

const ViewImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backBtn} >
                <Icon name="close" color="white" size={30} /> 
            </View>
            <View style={styles.deleteBtn} >
                <Icon name="trash-can-outline" color="white" size={35} /> 
            </View>
            <Image source={require('../assets/images/chair.jpg')} resizeMode="contain" style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.black
    },
    backBtn:{
        position: 'absolute',
        top:20,
        left: 30
    },
    deleteBtn:{
        position: 'absolute',
        top:20,
        right: 30
    },
    image:{
        width: '100%',
        height: '100%'
    }
})


export default ViewImage
