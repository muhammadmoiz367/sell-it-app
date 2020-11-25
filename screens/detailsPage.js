import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import {ListItem, AppText} from '../components/lists'

import colors from '../utils/colors'

const DetailsPage = () => {
    return (
        <View>
            <Image style={styles.image} source={require("../images/jacket.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.text} >Red jacket for sale</AppText>
                <AppText style={styles.price} >$100</AppText>
            </View>
            <View style={styles.userContainer} >
                <ListItem
                    image={require('../images/mosh.jpg')}
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
