import React, {useEffect} from 'react';
import {SafeAreaView,StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import { Colours } from './src/utilities/Colours';

import Router from './src/navigation/Router';
import AddLocation from './src/components/AddLocation/AddLocation';
import Geolocation from '@react-native-community/geolocation';
import Helper from './src/screens/Reports/helper'
import OnboardingScreen from './src/screens/OnBoarding/OnBoarding';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

navigator.geolocation = require('@react-native-community/geolocation');

//Android
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "TocSin App Location Permission",
        message:
          "TocSin App needs access to your location " +
          "so you can view alert closer to you",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => {

  useEffect(() => {
    if(Platform.OS === 'android'){
      requestLocationPermission()
    }else{
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    
    <Provider store={Store}>
      < >
        <Router/>
        {/* <SignupScreen/> */}
        {/* <LoginScreen/> */}
  
      </>
    </Provider>

  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colours.primary,

  },
});

export default App;
