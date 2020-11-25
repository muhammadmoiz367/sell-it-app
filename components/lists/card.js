import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from '../../utils/colors'
import AppText from './appText'

const Card = ({image, title, subTitle}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} resizeMethod="resize" />
            <View style={styles.detailsContainer}>
                <AppText style={styles.text} >{title}</AppText>
                <AppText style={styles.subText} >{subTitle}</AppText>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 15, 
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
        
    },
    detailsContainer: {
        padding: 20
    },
    text: {
        marginBottom: 7
    },
    subText: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})
