import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ListingEditPage from '../screens/listingEditPage';
import FeedsNavigator from './feedsNavigator';
import AccountNavigator from './accountNavigator';
import AddListingButton from './addListingButton';
import route from './routes'

const Tab=createBottomTabNavigator();
const AppNavigator=()=>(
  <Tab.Navigator >
    <Tab.Screen name={route.FEEDS} component={FeedsNavigator} options={{ tabBarIcon: ({size, color})=> <Icon name="home" size={size} color={color} /> }} />
    <Tab.Screen 
        name={route.ADD_LISTING} 
        component={ListingEditPage} 
        options={({ navigation })=>({ 
            tabBarButton: ()=> (<AddListingButton onPress={()=>navigation.navigate(route.ADD_LISTING)} />), 
            tabBarIcon: ({size, color})=> <Icon name="home" size={size} color={color} /> 
        })} 
    />
    <Tab.Screen name={route.ACCOUNT} component={AccountNavigator} options={{ tabBarIcon: ({size, color})=> <Icon name="account" size={size} color={color} />, title: ''}} />
  </Tab.Navigator>
)

export default AppNavigator