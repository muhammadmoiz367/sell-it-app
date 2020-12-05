import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import HomePage from '../screens/homePage';
import LoginPage from '../screens/loginPage';
import SignUp from '../screens/signupPage';
import colors from '../utils/colors';
import route from './routes'

const Stack=createStackNavigator();
const AuthNavigator=()=>(
  <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#eee'},
      headerTintColor: colors.dark
  }} >
    <Stack.Screen name={route.HOME} component={HomePage} options={{headerShown: false}} />
    <Stack.Screen name={route.LOG_IN} component={LoginPage} />
    <Stack.Screen name={route.SIGN_UP} component={SignUp} />
  </Stack.Navigator>
)

export default AuthNavigator