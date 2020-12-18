import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import {ListItem} from '../components/lists'
import AppText from '../components/appText'

import colors from '../utils/colors'

const DetailsPage = ({route}) => {
    const item=route.params
    return (
        <View>
            <Image style={styles.image} source={{uri: item.images[0].url}} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.text} >{item.title}</AppText>
                <AppText style={styles.price} >${item.price}</AppText>
            </View>
            <View style={styles.userContainer} >
                <ListItem
                    image={require('../assets/images/mosh.jpg')}
                    title="Brad Traversy"
                    subTitle="7 Listings"
                 />
            </View>
        </View>
    )
}

export default DetailsPage

const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    userContainer: {
        marginVertical: 40
    },
    text: {
        fontSize:24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        paddingVertical: 10,
        fontSize: 20
    }
    
})
