import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import AppTextInput from './components/appTextInput';
import Screen from './components/screen';

import AccountScreen from './screens/accountScreen';
import ListingPage from './screens/listingPage';

import colors from './utils/colors';

const App = () => {
  
  return (
    
      <AppTextInput name="email" placeholder="example@gmail.com" />
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
