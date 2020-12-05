import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import AccountScreen from '../screens/accountScreen';
import MessagePage from '../screens/messagePage';
import route from './routes'

const Stack=createStackNavigator();
const AccountNavigator=()=>(
  <Stack.Navigator >
    <Stack.Screen name={route.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={route.MESSAGES} component={MessagePage} />
  </Stack.Navigator>
)

export default AccountNavigator