
import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import History from './src/screens/History';
import Colours from './src/data/Colours';

import Trade from './src/screens/Trade';
import Router from './src/navigation/Router';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  const isDarkMode = true;

  return (
    <>
    {/* <NavigationContainer> */}
    {/* <SafeAreaView> */}
      {/* <StatusBar  backgroundColor={Colours.blue}/> */}



          {/* <History/> */}

          {/* <Trade/> */}
          <Router/>


    {/* </SafeAreaView> */}
    {/* </NavigationContainer> */}
    </>
  );
};

const styles = StyleSheet.create({
  background: {

  },
});

export default App;
