import 'react-native-gesture-handler';

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

import HomeScreen from './src/screens/Home/HomeScreen';
import Post from './src/components/Post/Post';

import feed from './assets/data/feed';
import SearchResults from './src/screens/SearchResults/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch/DestinationSearch';


const App: () => Node = () => {
 

  return (
    <SafeAreaView >
      {/* <HomeScreen/> */}
      {/* <SearchResults/> */}
      <DestinationSearch/>
    </SafeAreaView>
  );
};


export default App;
