import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import AuthNavigator from './navigation/authNavigator';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/appNavigator';

const App = () => {  
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});
 
export default App;
