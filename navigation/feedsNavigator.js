import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import DetailsPage from '../screens/detailsPage';
import ListingPage from '../screens/listingPage';
import route from './routes'

const Stack=createStackNavigator();
const FeedsNavigator=()=>(
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }} >
    <Stack.Screen name={route.LISTINGS} component={ListingPage} />
    <Stack.Screen name={route.LISTING_DETAILS} component={DetailsPage} />
  </Stack.Navigator>
)

export default FeedsNavigator