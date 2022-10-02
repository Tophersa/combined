import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GuessingRoom from '../screens/GuessingRoom/GuessingRoom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Tab = createMaterialTopTabNavigator();

const HomeTopNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={GuessingRoom} />
      </Tab.Navigator>
    )
}

export default HomeTopNav
