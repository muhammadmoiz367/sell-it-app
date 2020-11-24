import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Screen from './components/screen';
import LoginPage from './screens/loginPage';

import colors from './utils/colors';


const App = () => {  
  return (
    <LoginPage />
  );
};

const styles = StyleSheet.create({
  
});
 
export default App;
