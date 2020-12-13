import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import AppText from '../components/appText'
import Card from '../components/card'
import Screen from '../components/screen'
import AppButton from '../components/buttons'
import colors from '../utils/colors'
import listingApi from '../api/listings'
import ActivityIndicator from '../components/activityIndicator'
import useApi from '../hooks/useApi'

const ListingPage = ({navigation}) => {
    const {data: listings, error, loading: isLoading, request: loadListings} = useApi(listingApi.getListings)

    useEffect(() => {
        loadListings()
    }, [])

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't find any posts</AppText>
                    <AppButton text="Retry" onPress={loadListings} />
                </>
            )}
            <ActivityIndicator visible={isLoading}  /> 
            <FlatList
                data={listings}
                keyExtractor={listing=> listing.id.toString()}
                renderItem={({item})=>
                    <Card 
                        title={item.title} 
                        subTitle={"$" + item.price} 
                        imageUrl={item.images[0].url} 
                        onPress={()=>navigation.navigate("ListingDetails", item)}
                    />
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
