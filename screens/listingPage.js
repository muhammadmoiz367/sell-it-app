import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import {Card, Screen} from '../components/lists'
import colors from '../utils/colors'

const listings=[
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../images/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../images/couch.jpg')
    },
    {
        id: 3,
        title: 'Chair in great condition',
        price: 500,
        image: require('../images/chair2.jpg')
    }
]

const ListingPage = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing=> listing.id.toString()}
                renderItem={({item})=>
                    <Card title={item.title} subTitle={"$" + item.price} image={item.image} />
                }
            />
        </Screen>
    )
}

export default ListingPage

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})
