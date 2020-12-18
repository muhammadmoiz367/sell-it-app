import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import jwtDecode from 'jwt-decode'

import AuthNavigator from './navigation/authNavigator';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/appNavigator';
import OfflineNotification from './components/offlineNotification';
import AuthContext from './auth/context';
import AuthStorage from './auth/storage'

const App = () => {  
  const [user, setUser]=useState();

  const restoreToken=async ()=>{
    const token=await AuthStorage.getToken()
    if(!token) return
    setUser(jwtDecode(token))
  }

  useEffect(()=>{
    restoreToken()  
    SplashScreen.hide();
  }, [])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotification />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer>
     </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  
});
 
export default App;
